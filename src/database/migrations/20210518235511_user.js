exports.up = function (knex) {
  return knex.schema.createTable("user", function (table) {
      table.string("user_id").primary().notNullable();
      table.string("firebase_id").notNullable();
      table.string("email").notNullable();
      table.string("nome").notNullable();
      table.string("nascimento").notNullable();
      table.string("cpf").notNullable();
  });
};

exports.down = function (knex) {
    return knex.schema.dropTable("user");
};
