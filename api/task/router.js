const express = require('express')
const router = express.Router()
const TasksModel = require('./model')

router.post('/', (req, res, next) => {
    TasksModel.insertTask(req.body)
        .then(task => {
            res.status(201).json(task)
        })
        .catch(next)
})

router.get('/', (req, res, next) => {
    TasksModel.getAllTasks()
        .then(tasks => {
            res.json(tasks)
        })
        .catch(next)
})

router.use((error, req, res, next) => { // eslint-disable-line
    res.status(error.status || 500).json({
        errorMessage: error.message,
        message: 'something bad happened in the task-router',
        stack: error.stack
    })
})

module.exports = router