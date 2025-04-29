'use client';

import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import MobileNavToggle from '@/components/MobileNavToggle';

export default function Shell({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="relative min-h-screen flex flex-col md:flex-row overflow-x-hidden">
      
      {/* Hamburger (top-left, always visible on mobile) */}
      <div className="fixed top-4 left-4 z-50 md:hidden">
        <MobileNavToggle onToggle={() => setIsSidebarOpen(!isSidebarOpen)} />
      </div>

      {/* Sidebar (mobile = slide-in, desktop = pinned) */}
      <div className="z-40">
        <Sidebar isOpen={isSidebarOpen} />
      </div>

      {/* Dark overlay when sidebar is open (click to close) */}
      {isSidebarOpen && (
        <div
          onClick={closeSidebar}
          className="fixed inset-0 bg-black bg-opacity-40 md:hidden z-30"
        ></div>
      )}

      {/* Main Content */}
      <main className="flex-1 p-8 z-20 md:ml-64">
        {children}
      </main>
    </div>
  );
}
