import type { Request, Response } from 'express';
import { mysqlDatabase } from '../connectionMySQL.ts';
import type { RowDataPacket } from 'mysql2';

interface Flashcard extends RowDataPacket {
  flashcardId?: number;
  flashcardQuestion: string;
  flashcardAnswer: string;
  categoryId: number;
}

export const getFlashcards = async (_request: Request, response: Response) => {
  const [results] = await mysqlDatabase.query<Flashcard[]>(
    'SELECT * FROM flashcard',
  );
  response.status(200).json(results);
  // response.send(results).status(200);
};

export const createFlashcard = async (
  request: Request<
    void,
    { message: string; success: boolean },
    { flashcardQuestion: string; flashcardAnswer: string; categoryId: number },
    void
  >,
  response: Response,
) => {
  await mysqlDatabase.execute(
    'INSERT INTO flashcard(flashcardQuestion, flashcardAnswer, categoryId) VALUES (?,?,?)',
    [
      request.body.flashcardQuestion,
      request.body.flashcardAnswer,
      request.body.categoryId,
    ],
  );
  response.status(201).send();
};

export const deleteFlashcard = async (
  request: Request<
    { id: number },
    { message: string; success: boolean },
    { flashcardQuestion: string; flashcardAnswer: string; categoryId: number },
    void
  >,
  response: Response,
) => {
  const { id } = request.params;
  const sql = 'DELETE FROM flashcard WHERE flashcardId = ?';

  const [result] = await mysqlDatabase.execute(sql, [id]);
  response.status(200).json(result);
};
