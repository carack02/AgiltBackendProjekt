import express from 'express';

const router = express.Router();

import {
  getUsers,
  createUser,
  updateUser,
} from '../controllers/userController.ts';

router.get('/users', getUsers);
router.post('/user', createUser);
router.post('/user', updateUser);

export default router;
