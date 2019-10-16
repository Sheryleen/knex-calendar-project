
exports.seed = function(knex, Promise) {
  
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      
      // Inserts seed entries
      return knex('table_name').insert([
        {name:  'Jimmy Buffett'},
        {email: 'jbj@com'},
      ]);
      return knex('table_name').insert([
        { name: 'Madonna' },
        { email: 'mda@com' },
      ]);
      return knex('table_name').insert([
        { name: 'Ray Charles' },
        { email: 'rcr@com' },
      ]);
    });
};
