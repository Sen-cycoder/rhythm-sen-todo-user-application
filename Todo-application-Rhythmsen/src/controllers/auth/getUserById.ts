
import { Request, Response } from 'express';
import getUserById from '../../services/getUserService';

export const getUser = async (req: Request, res: Response): Promise<void> => {
  const userId = parseInt(req.params.id, 10);
  try {
    const user = await getUserById(userId);
    if (!user) {
      res.status(404).json({ message: 'User not found' });
    } else {
      res.status(200).json(user);
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: `Error fetching user: ${error.message}` });
    } else {
      res.status(500).json({ message: 'Unknown error occurred' });
    }
  }
};
