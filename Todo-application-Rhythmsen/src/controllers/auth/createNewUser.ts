import { Request, Response } from 'express';
import  createUser  from '../../services/createUser';
import { User } from '../../model/user';

export const addUser = async (req: Request, res: Response): Promise<void> => {
    const newUser: User = req.body;
    try {
        const userId = await createUser(newUser);
    
        if (typeof userId !== 'string' && typeof userId !== 'number') {
            throw new Error('Invalid user ID returned from createUser');
        }
        const { id, ...userWithoutId } = newUser;
    
        res.status(201).json({ id: userId, ...userWithoutId });
    } catch (error) {
        // Properly handle the error object
        const errorMessage = (error instanceof Error && error.message) || 'Unknown error occurred';
        res.status(500).json({ message: `Error creating user: ${errorMessage}` });
    }
};