import { MongoClient, Db } from 'mongodb'

const uri = process.env.MONGODB_URI
let cachedDb = null

async function connectToDatabase() {
  if (cachedDb) {
    return cachedDb
  }
  const client = await MongoClient.connect(uri)
  const db = client.db()
  cachedDb = db
  return db
}

export default connectToDatabase
