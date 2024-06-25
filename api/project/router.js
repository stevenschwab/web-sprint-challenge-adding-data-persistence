const express = require('express')
const ProjectModel = require('./model')
const router = express.Router()

router.get('/', (req, res, next) => {
    ProjectModel.getAllProjects()
        .then(projects => {
            res.json(projects)
        })
        .catch(next)
})

router.post('/', (req, res, next) => {
    ProjectModel.insertProject(req.body)
        .then(project => {
            res.status(201).json(project)
        })
        .catch(next)
})

router.use((error, req, res, next) => { //eslint-disable-line
    res.status(error.status || 500).json({
        errorMessage: error.message,
        message: "something bad happened in the project-router",
        stack: error.stack
    })
})

module.exports = router