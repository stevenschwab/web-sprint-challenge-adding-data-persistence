const { clean } = require('knex-cleaner')

exports.seed = async function (knex) {
    try {
        // Disable foreign key checks
        await knex.raw('PRAGMA foreign_keys = OFF')

        // Clean the tables
        await clean(knex, {
            mode: 'truncate',
            ignoreTables: ['knex_migrations', 'knex_migrations_lock'],
        })
    } finally {
        // Re-enable foreign key checks
        await knex.raw('PRAGMA foreign_keys = ON')
    }
}