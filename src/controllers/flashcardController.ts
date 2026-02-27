import type { Request, Response } from 'express';
import { mysqlDatabase } from '../connectionMySQL.ts';
import type { RowDataPacket, ResultSetHeader } from 'mysql2';

interface Flashcard extends RowDataPacket {
  flashcardId?: number;
  flashcardQuestion: string;
  flashcardAnswer: string;
  categoryId: number;
}

export const getFlashcards = async (_req: Request, res: Response) => {
  const [results] = await mysqlDatabase.query<Flashcard[]>(
    'SELECT * FROM flashcard',
  );
  res.status(200).json(results);
};

export const getFlashcard = async (
  req: Request<
    { id: number },
    void,
    { flashcardQuestion: string; flashcardAnswer: string; categoryId: number },
    void
  >,
  response: Response,
) => {
  const { id } = req.params;
  const sql = 'SELECT * FROM flashcard WHERE flashcardId = ?';

  const [result] = await mysqlDatabase.execute(sql, [id]);
  response.status(200).json(result);
};

export const createFlashcard = async (
  req: Request<
    void,
    void,
    { flashcardQuestion: string; flashcardAnswer: string; categoryId: number },
    void
  >,
  res: Response,
) => {
  const { flashcardQuestion, flashcardAnswer, categoryId } = req.body;
  await mysqlDatabase.execute(
    'INSERT INTO flashcard(flashcardQuestion, flashcardAnswer, categoryId) VALUES (?,?,?)',
    [flashcardQuestion, flashcardAnswer, categoryId],
  );
  res.status(201).send('Ett flashcard har lagt till!');
};

export const updateFlashcard = async (
  req: Request<
    { id: number },
    void,
    {
      flashcardQuestion: string;
      flashcardAnswer: string;
      categoryId: number;
    },
    void
  >,
  res: Response,
) => {
  const { id } = req.params;
  const { flashcardQuestion, flashcardAnswer, categoryId } = req.body;
  const sql =
    'UPDATE flashcard SET flashcardQuestion = ?, flashcardAnswer = ?, categoryId = ? WHERE flashcardId = ?';
  const [result] = await mysqlDatabase.execute<ResultSetHeader>(sql, [
    flashcardQuestion,
    flashcardAnswer,
    categoryId,
    id,
  ]);
  if (result.affectedRows === 0)
    res.status(404).send('Flashcard med detta id hittades inte!');
  else res.status(200).send('Flashcard har blivit uppdaterat!');
};

export const deleteFlashcard = async (
  req: Request<
    { id: number },
    void,
    { flashcardQuestion: string; flashcardAnswer: string; categoryId: number },
    void
  >,
  res: Response,
) => {
  const { id } = req.params;
  const sql = 'DELETE FROM flashcard WHERE flashcardId = ?';

  const [result] = await mysqlDatabase.execute<ResultSetHeader>(sql, [id]);
  if (result.affectedRows === 0)
    res.status(404).send('Flashcard med detta id hittades inte!');
  else res.status(200).send('Flashcard raderats!');
};
