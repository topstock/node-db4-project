const express = require('express')
const Recipe = require('./recipes-model')

const router = express.Router()

router.get('/', (req, res, next) => {
    Recipe.find()
      .then(recipes => {
          res.json(recipes)
      })
      .catch(next)
})

router.get('/:id', () => {
    Recipe.findById(req.params.id)
      .then(recipe => {
          res.json(recipe)
      })
      .catch(next)
})

module.exports = router