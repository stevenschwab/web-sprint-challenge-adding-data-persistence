// build your server here and require it from index.js
const express = require('express')

const server = express()

server.use(express.json())

server.use('*', (req, res, next) => { //eslint-disable-line
    res.json({ message: "API is up" })
})

module.exports = server