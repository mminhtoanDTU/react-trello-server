import { MongoClient } from 'mongodb'
import { env } from './environment'
require('dotenv').config()

const URI = env.MONGODB_URI

export const connect = async () => {
    const client = new MongoClient(URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })

    try {
        await client.connect()
        await listDatabases(client)
        console.log('Connected to DB successfully')
    } catch (error) {
        console.log(error)
    } finally {
        await client.close()
    }
}

const listDatabases = async (client) => {
    const databaseList = await client.db().admin().listDatabases()
    console.log(databaseList)
    console.log('Your database:')
    databaseList.databases.forEach((db) => console.log(db.name))
}
