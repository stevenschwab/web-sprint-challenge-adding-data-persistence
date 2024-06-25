const express = require('express')
const router = express.Router()
const TasksModel = require('./model')

router.post('/', (req, res, next) => {

})

router.get('/', (req, res, next) => {

})

router.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        errorMessage: error.message,
        message: 'something bad happened in the task-router',
        stack: error.stack
    })
})

module.exports = router