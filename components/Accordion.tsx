'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Accordion({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full max-w-xl mx-auto">
      <button onClick={() => setOpen(!open)} className="w-full flex justify-between items-center py-4 border-b border-neutral-300 dark:border-neutral-600 font-heading text-xl hover:text-primary transition-colors">
        {title}
        <span className="text-primary">{open ? '–' : '+'}</span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        className="overflow-hidden text-base leading-relaxed"
      >
        <div className="py-4">{children}</div>
      </motion.div>
    </div>
  );
} 