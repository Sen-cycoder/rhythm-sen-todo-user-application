import { Request, Response } from 'express';
import { getAllTodos } from '../../services/crud/getAllTodo';

export const getAllTodosController = async (req: Request, res: Response) => {
  const userId = Number(req.params.id);
  try {
    const todos = await getAllTodos(userId);
    res.json(todos);
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
