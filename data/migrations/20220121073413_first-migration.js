/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = async function(knex) { //make the migration function async for knex
    await knex.schema
      .createTable('recipes', table => {
          table.increments('recipe_id').notNullable().unique()
          table.text('recipe_name', 128).notNullable().unique()
          table.integer('created_at').notNullable() 
      }) 
      .createTable('ingredients', table => {
          table.increments('ingredient_id').notNullable().unique()
          table.text('ingredient_name', 128).notNullable().unique()
      })
      .createTable('steps', table => {
          table.increments('step_id').notNullable().unique() 
          table.text('instructions', 128).notNullable()
          table.integer('step_number').notNullable()
          table.integer('recipe_id')
            // forces integer to be positive
            .unsigned()
            .notNullable()
            .references('recipe_id')
            // this table must exist already
            .inTable('recipes')
            .onDelete('CASCADE') 
            .onUpdate('CASCADE') 
      })
      .createTable('recipe_portions', table => {
          table.increments('recipe_portion_id').notNullable().unique()
          table.float('quantity').notNullable()
          table.integer('step_id')
           // forces integer to be positive
            .unsigned()
            .notNullable()
            .references('step_id')
            // this table must exist already
            .inTable('steps')
            .onDelete('CASCADE') 
            .onUpdate('CASCADE') 

          table.integer('ingredient_id')
            // forces integer to be positive
            .unsigned()
            .notNullable()
            .references('ingredient_id')
            // this table must exist already
            .inTable('ingredients')
            .onDelete('CASCADE') //RESTRICT vs CASCADE
            .onUpdate('CASCADE') 
      })
      // order of creation is to avoid foreign keys or entanglements
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = async function(knex) {
    await knex.schema
      .dropTableIfExists('recipe_portions') 
      .dropTableIfExists('steps')  //drip in reverse order of creation
      .dropTableIfExists('ingredients') 
      .dropTableIfExists('recipes') 
  };
  
  //you can manipulate anything in a database with these commands.  
  //DO NOT DESTROY THINGS HERE//  You can do real damage with a badly coded migration
  //Always have this ticket reviewed by senior level developer
  