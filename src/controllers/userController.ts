import express, { request, response } from 'express';
import type { Request, Response } from 'express';
import { type OptionalId } from 'mongodb';
import { mongoDatabase } from '../connectionMongoDB.ts';

interface User {
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
