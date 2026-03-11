import express from 'express';

import {
  createQuiz,
  getQuizzes,
  deleteQuiz,
  getQuizById,
  updateQuiz,
  getQuizByCollection,
} from '../controllers/quizController.ts';

const router = express.Router();

router.get('/quizzes', getQuizzes);
router.post('/quiz', createQuiz);
router.delete('/quiz/:id', deleteQuiz);
router.get('/quiz/:id', getQuizById);
router.get('/quizByCol/:collection', getQuizByCollection);

router.put('/quiz/:id', updateQuiz);

export default router;
