import express, { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/user';
import { signToken } from '../utils/jwt';

const router = express.Router();

router.post('/register', async (req: Request, res: Response) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ error: 'Missing fields' });
  const existing = await User.findOne({ username });
  if (existing) return res.status(400).json({ error: 'User exists' });
  const hash = await bcrypt.hash(password, 10);
  const user = new User({ username, password: hash });
  await user.save();
  const token = signToken({ id: user._id, username });
  res.json({ token });
});

router.post('/login', async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) return res.status(400).json({ error: 'Invalid credentials' });
  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(400).json({ error: 'Invalid credentials' });
  const token = signToken({ id: user._id, username });
  res.json({ token });
});

export default router;
