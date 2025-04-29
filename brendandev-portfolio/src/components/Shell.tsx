'use client';

import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import MobileNavToggle from '@/components/MobileNavToggle';

export default function Shell({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="relative min-h-screen flex flex-col md:flex-row overflow-x-hidden">
      {/* Mobile Hamburger Button */}
      <div className="fixed top-4 left-4 z-50 md:hidden">
        <MobileNavToggle onToggle={() => setIsSidebarOpen(!isSidebarOpen)} />
      </div>

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} />

      {/* Black semi-transparent overlay */}
      {isSidebarOpen && (
        <div
          onClick={closeSidebar}
          className="fixed inset-0 bg-black bg-opacity-40 md:hidden z-30"
        ></div>
      )}

      {/* Main Content */}
      <main className="flex-1 p-8 z-20">
        {children}
      </main>
    </div>
  );
}
