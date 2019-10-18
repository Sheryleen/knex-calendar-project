const knex = require('../db/knex')

exports.getOneAppointment 
knex
    .select()
    .table('appointments')
    .then(appointments => res.json(appointments))

exports.updateOneAppointment 
knex('appointments')
    .update({
        ...req.body,
       updated_at: newDate() 
    })
    .where('id, req.params.id')
    .returning('*')
    .then(updateAppointment => res.json(updatedAppointment))

knex('appointments'
    .del()
    .where('id', req.params.id)
    .returning("*")
    .then(newAppointment => res.json(newAppointment))
)