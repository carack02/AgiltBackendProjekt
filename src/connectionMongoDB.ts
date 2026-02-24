import { MongoClient } from 'mongodb';

export const mongoDatabase = new MongoClient('mongodb://localhost:27017').db(
  'mongodb-the-project',
);
