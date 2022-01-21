/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { ingredient_name: 'meat'},
        { ingredient_name: 'basil'},
        { ingredient_name: 'cumin'},
        { ingredient_name: 'onions'},
        { ingredient_name: 'vegitables'},
        { ingredient_name: 'noodles'},
        { ingredient_name: 'bread'},
        { ingredient_name: 'tortilla'},
      ]);
    });
};
