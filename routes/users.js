const express = require("express");
const router = express.Router(); //instance of a router
const knex = require("../db/knex"); //importing instance of knex
const usersController = require("../controllers/users");

//GET ALL USERS, ONE USER, ADDING USER AND REMOVE USER
router.get("/users", usersController.getAllUsers);
router.get("/users/:id", usersController.getOneUser);//req.params.id this is :id
router.post("/users", usersController.addOneUser);
router.patch("/users/:id", usersController.updateOneUser);
router.delete("/users/:id", usersController.removeOneUser);

//ADD AN APPOINTMENT USING THE ID
//USER AND APPOINTMENT POSTS TO USER_APPOINTMENT TABLE
//TWO QUEARYS USED - QUEARY ONE IS MAKE THE APPOINTMENT THEN ADD USER AND APPOINTMENT TO USER_APPOINTMENT TABLE

module.exports = router;
