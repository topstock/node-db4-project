/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {step_number: 1, instructions: 'boil ingredients in water', recipe_id: 1},
        {step_number: 2, instructions: 'brown the meat and simmer sauce', recipe_id: 1},
        {step_number: 3, instructions: 'mix it up in a blender', recipe_id: 1},
        {step_number: 1, instructions: 'microwave on high 5 minutes', recipe_id: 2},
        {step_number: 2, instructions: 'assemble ingredients', recipe_id: 2},
        {step_number: 3, instructions: '400 degrees in the air fryer 5 minutes', recipe_id: 2},
        {step_number: 1, instructions: 'pan fry meat patty 10 minutes then 7 minutes', recipe_id: 3},
        {step_number: 2, instructions: 'chop up', recipe_id: 3},
        {step_number: 3, instructions: 'assemble inside ', recipe_id: 3}
      ]);
    });
};
