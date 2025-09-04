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
        <a href="https://github.com/nhsuh" target="_blank" rel="noopener noreferrer" className="relative border-2 border-transparent bg-gradient-to-r from-primary via-accent-purple to-accent-orange p-0.5 font-heading rounded-lg shadow hover:-translate-y-1 transition-all group overflow-hidden">
          <span className="flex px-6 py-3 bg-background-light dark:bg-background-dark rounded-md group-hover:bg-gradient-to-r group-hover:from-primary group-hover:via-accent-purple group-hover:to-accent-orange group-hover:text-white transition-all">
            GitHub
          </span>
        </a>
        <a href="https://www.linkedin.com/in/nathan-suh/" target="_blank" rel="noopener noreferrer" className="relative border-2 border-transparent bg-gradient-to-r from-primary via-accent-purple to-accent-orange p-0.5 font-heading rounded-lg shadow hover:-translate-y-1 transition-all group overflow-hidden">
          <span className="flex px-6 py-3 bg-background-light dark:bg-background-dark rounded-md group-hover:bg-gradient-to-r group-hover:from-primary group-hover:via-accent-purple group-hover:to-accent-orange group-hover:text-white transition-all">
            LinkedIn
          </span>
        </a>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="relative border-2 border-transparent bg-gradient-to-r from-accent-orange via-accent-gold to-secondary p-0.5 font-heading rounded-lg shadow hover:-translate-y-1 transition-all group overflow-hidden">
          <span className="flex px-6 py-3 bg-background-light dark:bg-background-dark rounded-md group-hover:bg-gradient-to-r group-hover:from-accent-orange group-hover:via-accent-gold group-hover:to-secondary group-hover:text-white transition-all">
            Resume
          </span>
        </a>
      </div>
    </div>
  );
} 