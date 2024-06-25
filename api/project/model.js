const db = require('../../data/dbConfig')

async function getProjectById(project_id) {
    const project = await db('projects').select('*').where('project_id', project_id).first()

    if (project) {
        project.project_completed = project.project_completed ? true : false
    }

    return project
}

async function insertProject(project) {
    const [project_id] = await db('projects').insert(project)
    return await getProjectById(project_id)
}

async function getAllProjects() {
    let projects = await db('projects').select('*')
    
    return projects.map(project => {
        project.project_completed = project.project_completed ? true : false
        return project
    })
}

module.exports = {
    insertProject,
    getAllProjects
}