import { MongoClient } from 'mongodb';

export const mongoDatabase = new MongoClient('mongodb://localhost:27017').db(
  process.env.MONGO_DB_NAME || 'mongodb-the-project',
);
