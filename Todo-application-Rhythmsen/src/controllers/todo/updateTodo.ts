import { Request, Response } from 'express';
import { updateTodo } from '../../services/crud/updateTodo';
import { Todo } from '../../model/todo';

export const updateTodoController = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const updatedTodo: Todo = req.body;
    updatedTodo.id = id; // Ensure the ID in the body matches the URL param ID
    try {
        await updateTodo(updatedTodo); // Use updateTodo directly
        res.json({ id: id, message: 'Todo updated successfully' });
    } catch (err) {
        let errorMessage;
        if (err instanceof Error) {
          errorMessage = err.message ? err.message : 'An unknown error occurred';
        } else {
          errorMessage = 'An unknown error occurred';
        }
        res.status(500).json({ message: errorMessage });
      }
    }