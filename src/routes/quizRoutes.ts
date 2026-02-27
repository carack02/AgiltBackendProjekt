import express from 'express';

import {
  createQuiz,
  getQuizzes,
  deleteQuiz,
  getQuizById,
  updateQuiz,
} from '../controllers/quizController.ts';

const router = express.Router();

router.get('/quizzes', getQuizzes);
router.post('/quiz', createQuiz);
router.delete('/quiz/:id', deleteQuiz);
router.get('/quiz/:id', getQuizById);
router.put('/quiz/:id', updateQuiz);

export default router;
