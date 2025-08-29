import { AgentTask } from '../types';

export const executionAgent = {
  name: 'ExecutionAgent',
  async handleTask(task: AgentTask) {
    // Example: simulate CRUD operation
    const { action, data } = task.payload;
    if (action === 'create') {
      return { status: 'created', data };
    } else if (action === 'read') {
      return { status: 'read', data };
    } else if (action === 'update') {
      return { status: 'updated', data };
    } else if (action === 'delete') {
      return { status: 'deleted', data };
    } else {
      return { error: 'Unknown action' };
    }
  },
};
