import express from 'express';

const router = express.Router();

import { getUsers, createUser } from '../controllers/userController.ts';

router.get('/users', getUsers);
router.post('/user', createUser);

export default router;
