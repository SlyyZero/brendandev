'use client';

import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-2xl"
      >
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-gray-300 leading-relaxed">
          I'm Brendan Jonsson, a Computer Science student and military veteran with a passion for software, web development, and emerging tech like Solana and game engines.
        </p>
      </motion.div>
    </section>
  );
}
