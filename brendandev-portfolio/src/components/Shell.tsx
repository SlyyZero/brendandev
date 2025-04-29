'use client';

import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import MobileNavToggle from '@/components/MobileNavToggle';

export default function Shell({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="relative min-h-screen flex flex-col md:flex-row overflow-x-hidden">
      
      {/* Mobile Top Bar */}
      <div className="fixed top-0 left-0 w-full flex items-center justify-between bg-gray-900 text-white px-4 py-3 z-40 md:hidden">
        <h1 className="text-lg font-bold">Brendan Jonsson</h1>
        <MobileNavToggle onToggle={() => setIsSidebarOpen(!isSidebarOpen)} />
      </div>

      {/* Spacer to push content below top bar */}
      <div className="md:hidden h-14" />

      {/* Mobile quick intro */}
      <div className="md:hidden flex flex-col items-center text-center mt-4 px-6 space-y-2">
        <p className="text-sm text-gray-400">Software Developer</p>
        <div className="flex space-x-4">
          <a href="#about" className="bg-teal-500 hover:bg-teal-400 text-white text-sm px-4 py-2 rounded">
            About
          </a>
          <a href="#projects" className="bg-teal-500 hover:bg-teal-400 text-white text-sm px-4 py-2 rounded">
            Projects
          </a>
        </div>
      </div>

      {/* Sidebar (desktop visible, mobile slide in) */}
      <Sidebar isOpen={isSidebarOpen} />

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          onClick={closeSidebar}
          className="fixed inset-0 bg-black bg-opacity-40 md:hidden z-30"
        ></div>
      )}

      {/* Main content */}
      <main className="flex-1 p-8 z-20 md:ml-64">
        {children}
      </main>
    </div>
  );
}
