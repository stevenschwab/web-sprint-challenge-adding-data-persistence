const projects = [
    { project_name: "Project Alpha", project_description: "Alpha project description", project_completed: 0 },
    { project_name: "Project Beta", project_description: "Beta project description", project_completed: 0 },
    { project_name: "Project Gamma", project_description: "Gamma project description", project_completed: 0 },
]

const resources = [
    { resource_name: "Resource A", resource_description: "Description for resource A" },
    { resource_name: "Resource B", resource_description: "Description for resource B" },
    { resource_name: "Resource C", resource_description: "Description for resource C" },
]

const project_resources = [
    // project 1
    { project_id: 1, resource_id: 1},
    { project_id: 1, resource_id: 2},
    // project 2
    { project_id: 2, resource_id: 3},
    // project 3
    { project_id: 3, resource_id: 1},
    { project_id: 3, resource_id: 3},
]

const tasks = [
    // project 1
    { task_description: "Task 1 for Project Alpha", task_notes: "Notes for task 1", task_completed: 0, project_id: 1 },
    { task_description: "Task 2 for Project Alpha", task_notes: "Notes for task 2", task_completed: 0, project_id: 1 },
    { task_description: "Task 3 for Project Alpha", task_notes: "Notes for task 3", task_completed: 0, project_id: 1 },
    // project 2
    { task_description: "Task 1 for Project Beta", task_notes: "Notes for task 4", task_completed: 0, project_id: 2 },
    // project 3
    { task_description: "Task 1 for Project Gamma", task_notes: "Notes for task 7", task_completed: 0, project_id: 3 },
    { task_description: "Task 2 for Project Gamma", task_notes: "Notes for task 8", task_completed: 0, project_id: 3 },
]

exports.seed = async function (knex) {
    await knex('projects').insert(projects)
    await knex('resources').insert(resources)
    await knex('tasks').insert(tasks)
    await knex('project_resources').insert(project_resources)
}