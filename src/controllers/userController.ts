import type { Request, Response } from 'express';
import { ObjectId, type OptionalId } from 'mongodb';
import { mongoDatabase } from '../connectionMongoDB.ts';

interface User {
  userId?: string;
  username: string;
  userEmail: string;
  userPassword: string;
}

export const getUsers = async (_request: Request, response: Response) => {
  const results = await mongoDatabase
    .collection<User>('users')
    .find()
    .toArray();
  response.json(results);
};

export const getUser = async (
  request: Request<{ id: ObjectId }, void, void, void>,
  response: Response,
) => {
  const result = await mongoDatabase
    .collection<OptionalId<User>>('users')
    .findOne({
      _id: new ObjectId(request.params.id),
    });
  if (!result) response.status(404).send('Användaren hittades inte');
  else response.status(200).send(result);
};

export const createUser = async (
  request: Request<
    void,
    { message: string; success: boolean },
    { username: string; userEmail: string; userPassword: string },
    void
  >,
  response: Response,
) => {
  const { username, userEmail, userPassword } = request.body;
  console.log(username);
  await mongoDatabase.collection<OptionalId<User>>('users').insertOne({
    username: username,
    userEmail: userEmail,
    userPassword: userPassword,
  });
  response.status(201).json({
    message: 'En användare har lagts till!',
    success: true,
  });
};

export const updateUser = async (
  request: Request<
    { id: ObjectId },
    void,
    {
      username: string;
      userEmail: string;
      userPassword: string;
    },
    void
  >,
  response: Response,
) => {
  const { username, userEmail, userPassword } = request.body;
  const result = await mongoDatabase
    .collection<OptionalId<User>>('users')
    .updateOne(
      {
        _id: new ObjectId(request.params.id),
      },
      {
        $set: {
          username: username,
          userEmail: userEmail,
          userPassword: userPassword,
        },
      },
    );
  response.status(200).send(result);
};
