const db = require('../database/dbconfig');

function find() {
  return db('instructor');
}

function findBy(filter) {
  return db('instructor')
    .where(filter)
    .returning('*');
}

function add(user) {
  return db('instructor')
    .insert(user)
    .returning('*');
}

function update(id, user) {
  return db('instructor')
    .where({ id })
    .update(user)
    .returning('*');
}

function remove(id) {
  return db('instructor')
    .where({ id })
    .del();
}

module.exports = { find, findBy, add, update, remove };
