// const server = require('../api/server');
const classesRouter = require('express').Router();
const Classes = require('./class-model.js');
const restricted = require('../auth/authenticate-middleware');

function allClasses(req, res) {
  Classes.find()
    .then(classes => res.json(classes))
    .catch(err => res.status(500).json(err));
}

function addClass(req, res) {
  Classes.add(req.body)
    .then(newClass => res.status(201).json(newClass[0]))
    .catch(err => res.status(500).json(err));
}

function updateClass(req, res) {
  Classes.update(req.params.id, req.body)
    .then(updatedClass => res.json(updatedClass[0]))
    .catch(err => res.status(500).json(err));
}

function deleteClass(req, res) {
  Classes.remove(req.params.id)
    .then(count => res.json(count))
    .catch(err => res.status(500).json(err));
}

classesRouter
  .get('/', restricted, allClasses)
  .post('/', restricted, addClass)
  .put('/:id', restricted, updateClass)
  .delete('/:id', restricted, deleteClass);

module.exports = classesRouter;
