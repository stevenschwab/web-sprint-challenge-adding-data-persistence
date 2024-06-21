/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  await knex.schema
  .createTable('projects', table => {
    table.increments('project_id')
    table.string('project_name', 256)
        .notNullable()
    table.string('project_description')
    table.integer('project_completed')
        .unsigned()
        .defaultTo(0)
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
