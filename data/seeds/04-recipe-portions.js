/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_portions').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_portions').insert([
        {quantity: 0.55, ingredient_id: 1, step_id: 1}, 
        {quantity: 0.02, ingredient_id: 7, step_id: 1},         
        {quantity: 0.02, ingredient_id: 5, step_id: 2}, 
        {quantity: 0.11, ingredient_id: 6, step_id: 2}, 
        {quantity: 0.33, ingredient_id: 7, step_id: 3}, 
        {quantity: 0.32, ingredient_id: 6, step_id: 3}, 
        {quantity: 0.12, ingredient_id: 1, step_id: 4}, 
        {quantity: 0.13, ingredient_id: 3, step_id: 4}, 
        {quantity: 0.24, ingredient_id: 5, step_id: 5}, 
        {quantity: 0.25, ingredient_id: 6, step_id: 5}, 
        {quantity: 0.31, ingredient_id: 5, step_id: 6}, 
        {quantity: 0.31, ingredient_id: 8, step_id: 6}, 
        {quantity: 0.10, ingredient_id: 1, step_id: 7}, 
        {quantity: 0.15, ingredient_id: 4, step_id: 7}, 
        {quantity: 0.27, ingredient_id: 5, step_id: 8}, 
        {quantity: 0.39, ingredient_id: 8, step_id: 9},
      ]);
    });
};
