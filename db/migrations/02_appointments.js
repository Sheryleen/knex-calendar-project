
exports.up = function (knex, Promise) {
    return knex.schema.createTable("appointments", function (table) {
        table.increments();
        table.string("users").notNullable()
        table.string("appointments").notNullable();
        table.timestamps(true, true);
    });
};
      
    exports.down = function (knex, Promise) {
        return knex.schema.dropTable("appointments");
  
};
 