import express from 'express'
import { getAllTodosController } from '../../controllers/todo/getAllTodo';
const router = express.Router()

router.get('/users/:id/todos', getAllTodosController);

export default router;