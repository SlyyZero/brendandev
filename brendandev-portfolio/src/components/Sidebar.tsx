'use client';

import Link from 'next/link';
import { Github, Linkedin } from 'lucide-react';

export default function Sidebar({ isOpen }: { isOpen: boolean }) {
  return (
<aside className={`w-full md:w-64 bg-gray-900 text-white p-8 flex flex-col justify-between
  transform transition-transform duration-300 ease-in-out
  ${isOpen ? 'translate-x-0' : '-translate-x-full'}
  z-40
  md:relative md:translate-x-0 md:h-auto
`}>
      <div>
        <h1 className="text-2xl font-bold mb-8">Brendan Jonsson</h1>
        <nav className="flex flex-col space-y-4 text-sm">
          <Link href="#about" className="hover:text-teal-400">About</Link>
          <Link href="#projects" className="hover:text-teal-400">Projects</Link>
          <Link href="#experience" className="hover:text-teal-400">Experience</Link>
          <Link href="#contact" className="hover:text-teal-400">Contact</Link>
        </nav>
      </div>

      <div className="flex space-x-4 mt-8 text-xl">
        <a href="https://github.com/SlyyZero" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">
          <Github size={28} />
        </a>
        <a href="https://linkedin.com/in/brendanjonsson" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">
          <Linkedin size={28} />
        </a>
      </div>
    </aside>
  );
}
