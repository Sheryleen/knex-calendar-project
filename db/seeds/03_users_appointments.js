exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users_appointments")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users_appointments").insert([
        { user_id: 1, appointment_id: 1 },
        { user_id: 2, appointment_id: 2 },
        { user_id: 3, appointment_id: 3 },
        { user_id: 4, appointment_id: 4 },
        { user_id: 5, appointment_id: 5 },
        { user_id: 6, appointment_id: 6 },
        { user_id: 7, appointment_id: 7 },
        { user_id: 8, appointment_id: 8 },
        { user_id: 9, appointment_id: 9 },
        { user_id: 10, appointment_id: 10 },
        { user_id: 11, appointment_id: 11 },
        { user_id: 12, appointment_id: 12 },
        { user_id: 13, appointment_id: 13 },
        { user_id: 14, appointment_id: 14 },
        { user_id: 15, appointment_id: 15 }
      ]);
    });
};
