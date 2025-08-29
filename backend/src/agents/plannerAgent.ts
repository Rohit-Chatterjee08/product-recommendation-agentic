import { AgentTask } from '../types';

export const plannerAgent = {
  name: 'PlannerAgent',
  async handleTask(task: AgentTask) {
    // Example: break down a goal into steps
    const goal = task.payload.goal;
    const steps = [
      `Define the goal: ${goal}`,
      'Research requirements',
      'List resources',
      'Create timeline',
      'Assign tasks',
    ];
    return { steps };
  },
};
