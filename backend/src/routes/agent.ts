import express, { Request, Response } from 'express';
import { verifyToken } from '../utils/jwt';
import { agents } from '../agents';

const router = express.Router();

router.post('/task', async (req: Request, res: Response) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'No token' });
  try {
    const user = verifyToken(token) as any;
    const { taskType, payload } = req.body;
    if (!taskType || !payload) return res.status(400).json({ error: 'Missing fields' });
    if (!agents[taskType]) return res.status(400).json({ error: 'Unknown agent' });
    const result = await agents[taskType].handleTask({ userId: user.id, taskType, payload });
    res.json({ agent: taskType, result });
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
});

export default router;
