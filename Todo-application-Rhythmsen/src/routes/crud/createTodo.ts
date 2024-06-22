import express from 'express'
import { createTodoController } from '../../controllers/todo/createTodo';
const router = express.Router()

router.post('/todos', createTodoController);

export default router;