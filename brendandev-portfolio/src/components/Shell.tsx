'use client';

import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import MobileNavToggle from '@/components/MobileNavToggle';

export default function Shell({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="relative flex flex-col md:flex-row min-h-screen">
      {/* Mobile Hamburger Button */}
      <MobileNavToggle onToggle={() => setIsSidebarOpen(!isSidebarOpen)} />

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} />

      {/* Overlay to detect clicks outside */}
      {isSidebarOpen && (
        <div
          onClick={closeSidebar}
          className="fixed inset-0 bg-black bg-opacity-30 md:hidden z-30"
        ></div>
      )}

      {/* Main Content */}
      <main className="flex-1 p-8 z-20">{children}</main>
    </div>
  );
}