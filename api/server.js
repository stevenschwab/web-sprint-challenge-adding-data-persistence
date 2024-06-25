const express = require('express')
const ResourcesRouter = require('./resource/router')
const ProjectsRouter = require('./project/router')

const server = express()

server.use(express.json())

server.use('/api/resources', ResourcesRouter)
server.use('/api/projects', ProjectsRouter)

server.use('*', (req, res, next) => { //eslint-disable-line
    res.json({ message: "API is up" })
})

module.exports = server