import express from 'express';

const router = express.Router();

import {
  getUsers,
  createUser,
  updateUser,
} from '../controllers/userController.ts';

router.get('/users', getUsers);
router.post('/user', createUser);
router.put('/user/:id', updateUser);

export default router;
