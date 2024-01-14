import { MONGO_URI } from '$env/static/private';
import { MongoClient } from 'mongodb';

let client = null;

export const dbConn = async () => {
	if (!client) {
		client = new MongoClient(MONGO_URI);
		await client.connect();
	}
	const dbName = 'users';
	const db = client.db(dbName);
	return db.collection('user');
};

export const killConn = async () => {
	if (client) {
		await client.close();
		client = null;
	}
};
