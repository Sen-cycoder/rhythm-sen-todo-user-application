// src/controllers/loginController.ts

import { Request, Response } from 'express';
import { validateUserCredentials } from '../../services/userValidation';
import { User } from '../../model/user';

export const loginUser = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;
  try {
    const user = await validateUserCredentials(email, password);
    if (!user) {
      res.status(401).json({ message: 'Invalid credentials' });
      return;
    }
    const { password: omit, ...userWithoutPassword } = user;
    res.status(200).json(userWithoutPassword);
  } catch (error: any) {
    res.status(500).json({ message: `Error authenticating user: ${error.message}` });
  }
};
