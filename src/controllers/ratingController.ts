import type { Request, Response } from 'express';
import mysqlpool from '../connectionMysql.ts';
import type { RowDataPacket } from 'mysql2';
// import type { RowDataPacket, ResultSetHeader } from 'mysql2';

const mysqlDatabase = mysqlpool;

interface Rating extends RowDataPacket {
  // ratingId: number;
  ratingScore: number;
  collectionId: number;
  ratedBy: string;
}

export const getRatings = async (_req: Request, res: Response) => {
  const [results] = await mysqlDatabase.query<Rating[]>(
    'SELECT * FROM ratings WHERE collectionId = 2',
    //borde jag inte endra över så de bara står SELECT * FROM ratings?
  );
  res.status(200).json(results);
};

export const createRating = async (
  req: Request<{ ratingScore: number; collectionId: number; ratedBy: string }>,
  res: Response,
) => {
  const { ratingScore, collectionId, ratedBy } = req.body;
  if (!ratingScore || !collectionId || !ratedBy) {
    return res.status(400).json({ error: 'Write in all fields please' });
  }
  const sql =
    'INSERT INTO ratings(ratingScore, collectionId, ratedBy) VALUES (?,?,?)';
  try {
    await mysqlDatabase.execute<Rating[]>(sql, [
      ratingScore,
      collectionId,
      ratedBy,
    ]);
  } catch (err) {
    console.error('Error creating rating:', err);
    return res.status(500).json({ error: 'Failed to create rating' });
  }
  res.status(201).send('Your rating was successfully added');
};
