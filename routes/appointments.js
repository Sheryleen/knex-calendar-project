const express = require('express');
const router = express.Router();
const knex = require('../db/knex');
const usersController = require('../controller/appointments');

//GET ALL APPOINTMENTS, ADD, EDIT AND REMOVE
router.get('/appointments', commentsController.getAllAppointments);
router.get('/appointments/:id', appointmentsController.getOneAppointment);
router.post('/appointments', appointmentsControlleraddOneAppointment);
router.patch('/appointments/:id', appointmentsController, updateOneAppointment);
router.delete('/appointments:id', appointmentsController.removeOneAppointment)

module.exports = router;