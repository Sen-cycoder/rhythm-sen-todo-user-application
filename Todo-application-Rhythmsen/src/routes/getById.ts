import { Router } from 'express';
import { getUser } from '../controllers/auth/getUserById';

const router = Router();

router.post('/add', getUser);

export default router;
