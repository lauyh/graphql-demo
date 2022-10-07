/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('merchants', function(table) {
    table.primary(['id', 'merchant_name'])
    table.increments('id');
    table.string('merchant_name').notNullable();
    table.string('phone_number').notNullable();
    table.decimal('latitude').notNullable();
    table.decimal('longtitude').notNullable();
    table.boolean('is_active').notNullable();
    table.datetime('created_at', { precision: 6 }).defaultTo(knex.fn.now());
    table.index(['id', 'merchant_name', 'is_active'], 'idx_id_merchant_name_is_active')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('merchants');
};
