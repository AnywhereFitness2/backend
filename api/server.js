const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

// const authenticate = require('../auth/authenticate-middleware');
const authRouter = require('../auth/auth-router');
const instructorRouter = require('../auth/instructor-auth-router');
const classRouter = require('../classes/class-router');
const categoryRouter = require('../categories/category-router');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/auth-register', instructorRouter);
server.use('/api/class', classRouter);
server.use('/api/category', categoryRouter);

server.get('/', (req, res) => {
  res.json({ API: 'API is Up!' });
});

module.exports = server;
