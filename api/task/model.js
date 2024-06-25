const db = require('../../data/dbConfig')

async function getTaskById(task_id) {
    const task = await db('tasks').select('*').where('task_id', task_id).first()

    if (task) {
        task.task_completed = task.task_completed ? true : false
    }

    return task
}

async function insertTask(task) {
    const [task_id] = await db('tasks').insert(task)
    return await getTaskById(task_id)
}

async function getAllTasks() {
    const tasks = await db('tasks as t')
        .select('task_id', 
            'task_description', 
            'task_notes', 
            'task_completed', 
            'project_name', 
            'project_description'
        )
        .join('projects as p', 't.project_id', 'p.project_id')
    
    return tasks.map(task => {
        task.task_completed = task.task_completed ? true : false
        return task
    })
}

module.exports = {
    insertTask,
    getAllTasks
}