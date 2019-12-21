const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets');

const Users = require('../users/users-model');

//Register user - api/auth/register
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

//Login - api/auth/login

router.post('/login', (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        res.status(200).json({
          message: `Welcome ${user.username}!`,
          token: token
        });
      } else {
        res.status(401).json({ message: 'Invalid Credentials' });
      }
    })
    .catch(error => {
      console.log(error);
      res.status(500).json(error);
    });
});

function generateToken(user) {
  const payload = {
    userid: user.id,
    username: user.username
  };
  const options = {
    expiresIn: '1h'
  };

  const token = jwt.sign(payload, secrets.jwtSecret, options);

  return token;
}
module.exports = router;
