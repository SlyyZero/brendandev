'use client';

import Link from 'next/link';
import {Github, Linkedin } from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="w-full p-4 md:w-64 md:fixed md:h-full bg-gray-900 text-white flex flex-col md:justify-between">
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
        <a href="https://github.com/SlyyZero" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">
        <Github size={28}/>
        </a>
        <a href="https://linkedin.com/in/brendanjonsson" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">
          <Linkedin size={28}/>
        </a>
        {/* Use icons here (Heroicons, Lucide, etc.) if desired */}
      </div>
    </aside>
  );
}
