'use client';

import { Menu } from 'lucide-react';

export default function MobileNavToggle({ onToggle }: { onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      className="md:hidden p-2 text-white focus:outline-none"
      aria-label="Open sidebar"
    >
      <Menu size={28} />
    </button>
  );
}
