import { Request, Response } from 'express';
import { createTodo } from '../../services/crud/createTodo';
import { Todo } from '../../model/todo';

export const createTodoController = async (req: Request, res: Response) => {
  const newTodo: Todo = req.body;
  try {
    const insertedId = await createTodo(newTodo); // Use createTodo directly
    res.status(201).json({ id: insertedId, message: 'Todo created successfully' });
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
