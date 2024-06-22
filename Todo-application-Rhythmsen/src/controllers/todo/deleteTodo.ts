import { Request, Response } from 'express';
import { deleteTodo } from '../../services/crud/deleteTodo';

export const deleteTodoController = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  try {
    await deleteTodo(id); 
    res.json({ id: id, message: 'Todo deleted successfully' });
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
