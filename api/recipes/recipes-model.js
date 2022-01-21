const db = require('../../data/db-config.js')

function find() {
  return db('recipes')
}

async function findById(id) {
    
}

module.exports = {
  find
}