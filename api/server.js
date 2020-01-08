const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

// const authenticate = require('../auth/authenticate-middleware');
const authRouter = require('../auth/auth-router');
const instructorRouter = require('../auth/instructor-auth-router');
// const classRouter = require('../classes/class-router');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/auth-register', instructorRouter);
// server.use('/api/class', authenticate, classRouter);

server.get('/', (req, res) => {
  res.json({ API: 'API is Up!' });
});

module.exports = server;
