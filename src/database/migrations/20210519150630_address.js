exports.up = function (knex) {
    return knex.schema.createTable("address", function (table) {
      table.string("address_id").primary().notNullable();
      table.string("user_id").notNullable();
      table
        .foreign("user_id")
        .references("user_id")
        .inTable("user")
        .onDelete("cascade");
  
      table.string("endereco").notNullable();
      table.string("cidade").notNullable();
      table.string("estado").notNullable();
      table.string("cep").notNullable();
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable("address");
  };