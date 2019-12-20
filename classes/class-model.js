const db = require('../database/dbconfig');

module.exports = {
  findClasses,
  findClassById,
  findClassesByCatId,
  addClass,
  removeClass,
  updateClass
};

function findClasses() {
  return db('Classes');
}

function findClassById(id) {
  return db('Classes')
    .where({ id })
    .first();
}

function findClassesByCatId(category_id) {
  return db('Classes')
    .where({ category_id })
    .first();
}

function addClass(something) {
  return db('Classes').insert(something);
}

function removeClass(id) {
  return db('Classes')
    .where({ id })
    .del();
}
function updateClass(id, changes) {
  return db('Classes')
    .where({ id })
    .update(changes);
}
