const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets');

const Users = require('../users/users-model');

//Register user
router.post('/register', (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;

  Users.add(user)
    .then(saved => {
      res.status(200).json({ registered_user: saved });
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
