/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const cleaner = require('knex-cleaner')

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return cleaner.clean(knex, { // cleaner clears them out in the correct order
    mode: 'truncate', // resets the database
    ignoreTables: ['knex_migrations', 'knex_migrations_lock'], // keep the tables that track the changes
  })
}