import { Request, Response, NextFunction } from 'express';
import { authenticateToken } from './auth';

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  authenticateToken(req, res, next);
};