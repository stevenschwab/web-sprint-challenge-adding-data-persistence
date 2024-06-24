const db = require('../../data/dbConfig')

async function getResourceById(id) {
    return await db('resources').where('resource_id', id).first()
}

async function insertResource(resource) {
    const [resource_id] = await db('resources').insert(resource)
    return await getResourceById(resource_id)
}

module.exports = {
    insertResource
}