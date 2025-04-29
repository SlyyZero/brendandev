'use client';

import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="fixed top-0 left-0 h-full w-64 bg-gray-900 text-white p-8 flex flex-col justify-between">
      {/* Top: Name + Nav */}
      <div>
        <h1 className="text-2xl font-bold mb-8">Brendan Jonsson</h1>
        <nav className="flex flex-col space-y-4 text-sm">
          <Link href="#about" className="hover:text-teal-400">About</Link>
          <Link href="#projects" className="hover:text-teal-400">Projects</Link>
          <Link href="#experience" className="hover:text-teal-400">Experience</Link>
          <Link href="#contact" className="hover:text-teal-400">Contact</Link>
        </nav>
      </div>

      {/* Bottom: Socials (Optional) */}
      <div className="flex space-x-4 mt-8 text-xl">
        <a href="https://github.com/SlyyZero" target="_blank" rel="noopener noreferrer">GH</a>
        <a href="https://linkedin.com/in/brendanjonsson" target="_blank" rel="noopener noreferrer">TEST</a>
        {/* Use icons here (Heroicons, Lucide, etc.) if desired */}
      </div>
    </aside>
  );
}
