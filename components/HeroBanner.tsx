'use client';
import { motion } from 'framer-motion';
import RotatingText from './RotatingText';

export default function HeroBanner() {
  return (
    <div className="relative flex flex-col items-center text-center">
      <motion.h1
        className="font-heading text-5xl md:text-7xl mb-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Hi, I'm <span className="font-display italic bg-gradient-to-r from-primary via-accent-purple to-accent-orange bg-clip-text text-transparent">Nathan</span>
      </motion.h1>
      <motion.div
        className="max-w-xl font-body"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <RotatingText />
      </motion.div>
      <div className="mt-8 flex flex-wrap gap-4 justify-center">
        <a href="https://github.com/nhsuh" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 font-heading rounded-lg shadow hover:-translate-y-1 hover:bg-gradient-to-r hover:from-primary hover:via-accent-purple hover:to-accent-orange hover:!text-black transition-all">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/nathan-suh/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 font-heading rounded-lg shadow hover:-translate-y-1 hover:bg-gradient-to-r hover:from-primary hover:via-accent-purple hover:to-accent-orange hover:!text-black transition-all">
          LinkedIn
        </a>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 font-heading rounded-lg shadow hover:-translate-y-1 hover:bg-gradient-to-r hover:from-accent-orange hover:via-accent-gold hover:to-secondary hover:!text-black transition-all">
          Resume
        </a>
      </div>
    </div>
  );
} 