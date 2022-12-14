const moment = require("moment");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("merchants", function (table) {
    table.primary(["id", "merchant_name"]);
    table.increments("id").unique();
    table.string("merchant_name").notNullable().unique();
    table.string("phone_number").notNullable().unique();
    table.decimal("latitude").notNullable();
    table.decimal("longtitude").notNullable();
    table.boolean("is_active").notNullable();
    table
      .datetime("created_at")
      .defaultTo(moment(new Date()).format("DD-MM-YYYY HH:mm:ss"));
    table.index(
      ["merchant_name", "is_active"],
      "idx_merchant_name_is_active"
    );
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("merchants");
};

// table.string("created_at").defaultTo(new Date().toISOString());
