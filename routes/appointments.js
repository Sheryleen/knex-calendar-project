const express = require("express");
const router = express.Router();
const knex = require("../db/knex");
const appointmentsController = require("../controllers/appointments");

//GET ALL APPOINTMENTS, ADD, EDIT AND REMOVE
router.get("/appointments", appointmentsController.getAllAppointments);
router.get("/appointments/:id", appointmentsController.getOneAppointment);
router.post("/appointments", appointmentsController.addOneAppointment);
router.patch("/appointments/:id", appointmentsController.updateOneAppointment);
router.delete("/appointments/:id", appointmentsController.removeOneAppointment);

module.exports = router;
