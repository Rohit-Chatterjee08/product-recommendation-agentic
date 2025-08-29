import React, { useEffect } from 'react';
import AgentDashboard from '../components/AgentDashboard';
import { useRouter } from 'next/router';

export default function DashboardPage() {
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) router.push('/login');
  }, [router]);
  return <AgentDashboard />;
}
