const knex = require("../db/knex");

exports.getAllAppointments = (req, res) => {
  knex //instance of knex
    .select() //select all
    .table("appointments") //from appointments
    .then(appointments => res.json(appointments)); //getting all appts back
};

exports.getOneAppointment = (req, res) => {
  knex("appointments")
    .select()
    .then(appointments => res.json(appointments));
};

exports.addOneAppointment = (req, res) => {
  knex("appointments")
    .insert({
      ...req.body //all column data in row
    })

    .returning("*")
    .then(appointments => res.json(appointments));
};

exports.updateOneAppointment = (req, res) => {
  knex("appointments")
    .update({
      ...req.body, //all column data in row
      updated_at: new Date()
    })

    .where("id", req.params.id)
    .returning("*")
    .then(updatedAppointment => res.json(updatedAppointment));
};

exports.removeOneAppointment = (req, res) => {
  knex("appointments")
    .del()
    .where("id", req.params.id)
    .returning("*")
    .then(newAppointment => res.json(newAppointment)); //returns removed appt
};
