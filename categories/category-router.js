const categoryRouter = require('express').Router();
const Categories = require('./category-model');
const restricted = require('../auth/authenticate-middleware');

function allCategories(req, res) {
  Categories.find()
    .then(categories => res.json(categories))
    .catch(err => res.status(500).json(err));
}

function addCategory(req, res) {
  Categories.findBy({ name: req.body.name })
    .then(foundUser => {
      if (foundUser.length === 0) {
        Categories.add(req.body)
          .then(newCategory => {
            res.status(201).json(newCategory[0]);
          })
          .catch(err => res.status(500).json(err));
      } else {
        res.status(400).json({
          message: `The Category Name: ${req.body.name}, is already taken.`
        });
      }
    })
    .catch(err => res.status(500).json(err));
}

function updateCategory(req, res) {
  Categories.update(req.params.id, req.body)
    .then(updatedCategory => res.json(updatedCategory[0]))
    .catch(err => res.status(500).json(err));
}

function deleteCategory(req, res) {
  Categories.remove(req.params.id)
    .then(count => res.json(count))
    .catch(err => res.status(500).json(err));
}

categoryRouter
  .get('/', restricted, allCategories)
  .post('/', restricted, addCategory)
  .put('/:id', restricted, updateCategory)
  .delete('/:id', restricted, deleteCategory);

module.exports = categoryRouter;
