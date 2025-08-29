import React, { useState } from 'react';
import { api } from '../utils/api';

const agentOptions = [
  { value: 'research', label: 'Research Agent' },
  { value: 'planner', label: 'Planner Agent' },
  { value: 'execution', label: 'Execution Agent' },
];

const AgentDashboard = () => {
  const [agent, setAgent] = useState('research');
  const [input, setInput] = useState('');
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState('');

  const handleTask = async () => {
    setError('');
    setResult(null);
    const token = localStorage.getItem('token');
    if (!token) {
      setError('Not authenticated');
      return;
    }
    let payload: any = {};
    if (agent === 'research') payload = { query: input };
    if (agent === 'planner') payload = { goal: input };
    if (agent === 'execution') payload = { action: 'create', data: input };
    try {
      const res = await api.post('/api/agent/task', { taskType: agent, payload }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setResult(res.data.result);
    } catch (err: any) {
      setError(err.response?.data?.error || 'Task failed');
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">Agent Dashboard</h2>
      <div className="mb-4">
        <select value={agent} onChange={e => setAgent(e.target.value)} className="p-2 border rounded w-full">
          {agentOptions.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>
      <input
        type="text"
        placeholder={agent === 'research' ? 'Enter topic' : agent === 'planner' ? 'Enter goal' : 'Enter data'}
        value={input}
        onChange={e => setInput(e.target.value)}
        className="w-full p-2 mb-3 border rounded"
      />
      <button onClick={handleTask} className="w-full bg-blue-600 text-white py-2 rounded font-bold">Send Task</button>
      {error && <div className="text-red-500 mt-2">{error}</div>}
      {result && (
        <div className="mt-4 bg-gray-100 p-3 rounded">
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default AgentDashboard;
