'use client';

import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function MobileNavToggle({ onToggle }: { onToggle: () => void }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    onToggle();
  };

  return (
    <button
      onClick={handleClick}
      className="md:hidden p-2 text-white focus:outline-none"
      aria-label="Toggle Navigation"
    >
      {isOpen ? <X size={28} /> : <Menu size={28} />}
    </button>
  );
}
