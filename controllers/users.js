const knex = require("../db/knex");

knex
  .select()
  .table("users")
  .where("id", req.params.id)
  .then(user => res.json(user));

knex(users)
  .insert(req.body)
  .returning("*")
  .then(newUser => res.json(newUser));

knex("users")
  .update({
    ...req.body,
    updated_at: newData()
  })
  .where("id", req.params.id)
  .returning("*")
  .then(updatedUser => res.json(updateUser));

knew("users")
  .del()
  .where("id, req.params.id")
  .returning("*")
  .then(newUser => res.json(newUser));
