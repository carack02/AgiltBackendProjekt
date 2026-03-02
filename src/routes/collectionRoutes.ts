import express from 'express';

import {
  createCollection,
  deleteCollection,
  getCollectionById,
  getCollections,
  updateCollection,
} from '../controllers/collectionController.ts';

const router = express.Router();

router.get('/collections', getCollections);
router.post('/collections', createCollection);
router.delete('/collections/:id', deleteCollection);
router.get('/collections/:id', getCollectionById);
router.put('/collections/:id', updateCollection);

export default router;
