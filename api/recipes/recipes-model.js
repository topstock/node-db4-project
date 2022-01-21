const db = require('../../data/db-config.js')

function find() {
  return db('steps as st')
    .join('recipes as r', 'r.recipe_id', 'st.recipe_id')
    .select('')
}

async function findById() {
    
}

module.exports = {
    find,
    findById
}