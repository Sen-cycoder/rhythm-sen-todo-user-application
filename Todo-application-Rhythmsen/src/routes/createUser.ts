// src/routes/userRoutes.ts
import { Router } from 'express';
import { addUser } from '../controllers/auth/createNewUser';

const router = Router();


router.post('/add', addUser);

export default router;
