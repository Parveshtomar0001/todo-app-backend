import { MongoClient } from 'mongodb';

let isDbConnected = null;

const client = new MongoClient(process.env.MONGO_URI);

async function connectToDatabase(dbName) {
    if (!isDbConnected) {
        try {
            await client.connect();
            isDbConnected = client.db(dbName);
            console.log("Database connected successfully");
        } catch (e) {
            console.log("Database connection error:", e.message);
        }
    } else {
        console.log("Database already connected");
    }

    return isDbConnected;
}

export default connectToDatabase;
