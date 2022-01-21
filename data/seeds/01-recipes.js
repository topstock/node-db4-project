/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe_name: 'Spaghetti', created_at: Date.now().toString()},
        {recipe_name: 'Tacos', created_at: Date.now().toString()},
        {recipe_name: 'Burgers', created_at: Date.now().toString()},
      ]);
    });
};
