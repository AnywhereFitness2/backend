const classesRouter = require('express').Router();
// need class model and restricted route

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
