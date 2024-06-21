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
        .notNullable()
  })
  .createTable('resources', table => {
    table.increments('resource_id')
    table.string('resource_name', 256)
        .unique()
        .notNullable()
    table.string('resource_description')
  })
  .createTable('tasks', table => {
    table.increments('task_id')
    table.string('task_description')
        .notNullable()
    table.string('task_notes')
    table.integer('task_completed')
        .unsigned()
        .defaultTo(0)
        .notNullable()
    table.integer('project_id')
        .unsigned()
        .notNullable()
        .references('project_id')
        .inTable('projects')
        .onDelete('RESTRICT')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
