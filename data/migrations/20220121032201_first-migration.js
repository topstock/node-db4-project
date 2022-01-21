/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) { //make the migration function async for knex
  await knex.schema
    .createTable('recipes', table => {
        table.increments('recipe_id')
        table.text('recipe_name', 128).notNullable().unique()
     ///TIMESTAMP  'created_at'
 
    }) 
    .createTable('ingredients', table => {
        table.increments('ingredients_id')
        table.text('ingredient_name', 128).notNullable().unique()
    })
    .createTable('steps', table => {
        table.increments('step_id')        
        table.text('instructions', 128).notNullable()
        table.integer('step_number').notNullable().unique()
        table.integer('recipe_id')
          // forces integer to be positive
          .unsigned()
          .notNullable()
          .references('recipe_id')
          // this table must exist already
          .inTable('recipes')
          .onDelete('RESTRICT') 
          .onUpdate('RESTRICT') 
    })
    .createTable('recipe_portions', table => {
        table.increments('recipe_portion_id')
        table.float('quantity').notNullable().unique()
        table.integer('step_id')
         // forces integer to be positive
          .unsigned()
          .notNullable()
          .references('step_id')
          // this table must exist already
          .inTable('steps')
          .onDelete('RESTRICT') 
          .onUpdate('RESTRICT') 
        table.integer('ingredient_id')
          // forces integer to be positive
          .unsigned()
          .notNullable()
          .references('ingredient_id')
          // this table must exist already
          .inTable('ingredients')
          .onDelete('RESTRICT') //RESTRICT vs CASCADE
          .onUpdate('RESTRICT') 
    })
    // order of creation is to avoid foreign keys or entanglements
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema
    .dropTableIfExists('steps')  //drip in reverse order of creation
    .dropTableIfExists('portions') 
    .dropTableIfExists('ingredients') 
    .dropTableIfExists('recipes') 
};

//you can manipulate anything in a database with these commands.  
//DO NOT DESTROY THINGS HERE//  You can do real damage with a badly coded migration
//Always have this ticket reviewed by senior level developer

