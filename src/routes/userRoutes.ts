import express from 'express';

const router = express.Router();

import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
} from '../controllers/userController.ts';

router.get('/users', getUsers);
router.get('/user/:id', getUserById);
router.post('/user', createUser);
router.patch('/user/:id', updateUser);

export default router;
