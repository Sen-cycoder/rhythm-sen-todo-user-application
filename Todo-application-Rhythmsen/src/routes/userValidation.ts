import { Router } from "express";
import { loginUser } from "../controllers/auth/userValidation";

const router = Router()

router.get('/login',loginUser)

export default router