import express from 'express';

const router = express.Router();
import { getRatings } from '../controllers/ratingController.ts';
import { createRating } from '../controllers/ratingController.ts';

router.get('/ratings', getRatings);
router.post('/rating', createRating);

export default router;
