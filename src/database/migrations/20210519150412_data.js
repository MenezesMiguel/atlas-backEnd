exports.up = function (knex) {
    return knex.schema.createTable("data", function (table) {
      table.string("data_id").primary().notNullable();
      table.string("user_id").notNullable();
      table
        .foreign("user_id")
        .references("user_id")
        .inTable("user")
        .onDelete("cascade");
        
      table.string("nome").notNullable();
      table.string("nascimento").notNullable();
      table.string("cpf").notNullable();
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable("data");
  };
  