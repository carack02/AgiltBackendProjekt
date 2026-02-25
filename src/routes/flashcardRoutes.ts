import express from 'express';

const router = express.Router();

import {
  getFlashcards,
  createFlashcard,
  updateFlashcard,
  deleteFlashcard,
} from '../controllers/flashcardController.ts';

router.get('/flashcards', getFlashcards);
router.post('/flashcard', createFlashcard);
router.put('/flashcard/:id', updateFlashcard);
router.delete('/flashcard/:id', deleteFlashcard);

export default router;
