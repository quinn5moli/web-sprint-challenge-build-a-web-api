require('dotenv').config()

const express = require('express');
const helmet = require('helmet')
const cors = require('cors')
const morgan = require('morgan')

const actionsRoutes = require('./actions/actions-router')
const projectsRoutes = require('./projects/projects-router')


const server = express();
server.use(helmet());
server.use(cors());
server.use(morgan('dev'));
server.use(express.json())

// Configure your server here
// Build your actions router in /api/actions/actions-router.js
// Build your projects router in /api/projects/projects-router.js
// Do NOT `server.listen()` inside this file!

 server.use('/api/actions', actionsRoutes)
 server.use('api/projects', projectsRoutes)


module.exports = server;
