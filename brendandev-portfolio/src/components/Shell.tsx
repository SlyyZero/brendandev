'use client';

import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import MobileNavToggle from '@/components/MobileNavToggle';

export default function Shell({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row">
      <MobileNavToggle onToggle={() => setIsSidebarOpen(!isSidebarOpen)} />
      <Sidebar isOpen={isSidebarOpen} />
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
}
