const db = require('../../data/dbConfig')

async function getResourceById(id) {
    return await db('resources').where('resource_id', id).first()
}

async function insertResource(resource) {
    const [result] = await db('resources').insert(resource).returning('resource_id')
    return await getResourceById(result.id)
}

module.exports = {
    insertResource
}