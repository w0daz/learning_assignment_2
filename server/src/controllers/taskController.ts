import { Request, Response } from 'express';

export const getTasks = (req: Request, res: Response) => {
  res.json({ message: 'Task api route works!' });
};
