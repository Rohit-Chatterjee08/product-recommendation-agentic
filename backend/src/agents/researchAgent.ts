import axios from 'axios';
import { AgentTask } from '../types';

export const researchAgent = {
  name: 'ResearchAgent',
  async handleTask(task: AgentTask) {
    // Example: fetch and summarize data from Wikipedia
    const query = task.payload.query;
    const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(query)}`;
    const { data } = await axios.get(url);
    return { summary: data.extract };
  },
};
