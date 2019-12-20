const server = require('../api/server');
const classesRouter = require('express').Router();
const Classes = require('./class-model.js');
const restricted = require('../auth/restricted.js');

router.get('/', restricted, async (req, res) => {
  try {
    const classes = await Classes.findClasses();
    res.status(200).json(classes);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Error getting the classes'
    });
  }
});
