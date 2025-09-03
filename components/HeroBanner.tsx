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
        Hi, I'm <span className="text-primary font-display italic">Nathan</span>
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
        <a href="https://github.com/nhsuh" target="_blank" rel="noopener noreferrer" className="border-2 border-primary text-primary font-heading px-6 py-3 rounded-lg shadow hover:-translate-y-1 hover:bg-primary hover:text-neutral-900 transition-all">GitHub</a>
        <a href="https://www.linkedin.com/in/nathan-suh/" target="_blank" rel="noopener noreferrer" className="border-2 border-primary text-primary font-heading px-6 py-3 rounded-lg shadow hover:-translate-y-1 hover:bg-primary hover:text-neutral-900 transition-all">LinkedIn</a>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="border-2 border-secondary text-secondary font-heading px-6 py-3 rounded-lg shadow hover:-translate-y-1 hover:bg-secondary hover:text-neutral-900 transition-all">Resume</a>
      </div>
    </div>
  );
} 