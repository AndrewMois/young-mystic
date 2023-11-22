import {MONGO_URI} from "$env/static/private";
import {MongoClient} from 'mongodb';

export const dbConn = async () => {
    const client = new MongoClient(MONGO_URI);
    await client.connect();
    const dbName = 'users';
    const db = client.db(dbName);
    return db.collection('user')
}