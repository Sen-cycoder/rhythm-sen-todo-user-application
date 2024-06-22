import express from 'express'
import { deleteTodoController } from '../../controllers/todo/deleteTodo';
const router = express.Router()

router.delete('/todos/:id', deleteTodoController);

export default router;