const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets');

const Instructor = require('../instructor/instructor-model');

//Register instructor - api/auth/instructor-register
router.post('/instructor-register', (req, res) => {
  let instructor = req.body;
  const hash = bcrypt.hashSync(instructor.password, 10);
  instructor.password = hash;

  Instructor.add(instructor)
    .then(saved => {
      res.status(200).json({ registered_user: saved });
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

//Instructor login

router.post('/instructor-login', (req, res) => {
  let { username, password } = req.body;

  Instructor.findBy({ username })
    .first()
    .then(instructor => {
      if (instructor && bcrypt.compareSync(password, instructor.password)) {
        const token = generateToken(instructor);
        res.status(200).json({
          message: `Welcome ${instructor.username}!`,
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

function generateToken(instructor) {
  const payload = {
    userid: instructor.id,
    username: instructor.username
  };
  const options = {
    expiresIn: '1h'
  };

  const token = jwt.sign(payload, secrets.jwtSecret, options);

  return token;
}
module.exports = router;
