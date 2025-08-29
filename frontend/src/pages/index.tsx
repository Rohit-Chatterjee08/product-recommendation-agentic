import React from 'react';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4 text-blue-600">Welcome to Agentic AI</h1>
      <p className="text-lg text-gray-700 mb-8">A collaborative AI product recommendation system powered by multiple agents.</p>
      <a href="/login" className="bg-blue-600 text-white px-6 py-2 rounded font-bold">Get Started</a>
    </div>
  );
}
