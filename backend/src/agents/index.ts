import { researchAgent } from './researchAgent';
import { plannerAgent } from './plannerAgent';
import { executionAgent } from './executionAgent';

export const agents: Record<string, any> = {
  research: researchAgent,
  planner: plannerAgent,
  execution: executionAgent,
};
