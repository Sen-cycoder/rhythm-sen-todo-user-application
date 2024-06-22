import { Request, Response } from 'express';
import { getTodoById } from '../../services/crud/getByIdTodo';
export const getTodoByIdController = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  try {
    const todo = await getTodoById(id);
    if (todo) {
      res.json(todo);
    } else {
      res.status(404).json({ message: 'Todo not found' });
    }
  } catch (err) {
    let errorMessage;
    if (err instanceof Error) {
      errorMessage = err.message ? err.message : 'An unknown error occurred';
    } else {
      errorMessage = 'An unknown error occurred';
    }
    res.status(500).json({ message: errorMessage });
  }
};
