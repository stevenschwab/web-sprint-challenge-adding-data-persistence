const express = require('express')
const ResourceModel = require('./model')
const router = express.Router()

router.post('/', (req, res, next) => {
    ResourceModel.insertResource(req.body)
        .then(resource => {
            res.status(201).json(resource)
        })
        .catch(next)
})

router.use((error, req, res, next) => { //eslint-disable-line
    res.status(error.status || 500).json({
        errorMessage: error.message,
        message: "something bad happened in the resource-router",
        stack: error.stack
    })
})

module.exports = router