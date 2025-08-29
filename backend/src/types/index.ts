export interface AgentTask {
  userId: string;
  taskType: string;
  payload: any;
}

export interface AgentResponse {
  agent: string;
  result: any;
}
