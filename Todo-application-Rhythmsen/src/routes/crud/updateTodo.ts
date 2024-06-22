import express from 'express'
import { updateTodoController } from '../../controllers/todo/updateTodo';
const router = express.Router()

router.put('/todos/:id', updateTodoController);

export default router;