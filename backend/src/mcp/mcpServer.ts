/// <reference types="express" />
import { Express, Request, Response } from 'express';
import { agents } from '../agents';

export function setupMCPServer(app: Express) {
  // MCP endpoint for agent collaboration
  app.post('/api/mcp/coordinate', async (req: Request, res: Response) => {
    const { tasks } = req.body;
    if (!Array.isArray(tasks)) return res.status(400).json({ error: 'Tasks must be array' });
    const results = [];
    for (const t of tasks) {
      if (!agents[t.taskType]) {
        results.push({ agent: t.taskType, error: 'Unknown agent' });
        continue;
      }
      const result = await agents[t.taskType].handleTask(t);
      results.push({ agent: t.taskType, result });
    }
    res.json({ results });
  });
}
