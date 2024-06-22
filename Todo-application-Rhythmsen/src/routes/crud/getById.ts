import express from 'express'
import { getTodoByIdController } from '../../controllers/todo/getByIdTodo';
const router = express.Router()

router.get('/todos/:id', getTodoByIdController);

export default router;