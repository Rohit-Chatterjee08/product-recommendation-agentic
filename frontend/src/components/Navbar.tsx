import React from 'react';
import Link from 'next/link';

const Navbar = () => (
  <nav className="bg-white shadow px-4 py-2 flex justify-between items-center">
    <div className="font-bold text-xl text-blue-600">Agentic AI</div>
    <div>
      <Link href="/dashboard" className="mr-4 text-blue-500">Dashboard</Link>
      <Link href="/login" className="text-blue-500">Login</Link>
    </div>
  </nav>
);

export default Navbar;
