'use client';
import { motion } from 'framer-motion';
import React from 'react';

interface ProjectCardProps {
  title: string;
  subtitle: string;
  impact: string;
  stack: string[];
  link?: string;
}

export default function ProjectCard({ title, subtitle, impact, stack, link }: ProjectCardProps) {
  return (
    <motion.article
      className="relative w-80 h-48 perspective-1000"
      whileHover="flip"
    >
      <motion.div
        variants={{
          flip: {
            rotateY: 180,
            transition: { duration: 0.6 },
          },
        }}
        className="absolute inset-0 rounded-xl shadow-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 flex flex-col justify-center items-center backface-hidden"
      >
        <h3 className="font-heading text-2xl mb-2">{title}</h3>
        <p className="font-body text-center px-4">{subtitle}</p>
      </motion.div>

      <motion.div
        variants={{
          flip: {
            rotateY: 360,
            transition: { duration: 0.6 },
          },
        }}
        className="absolute inset-0 rounded-xl shadow-lg bg-primary text-neutral-900 flex flex-col justify-center items-center rotateY-180 backface-hidden"
      >
        <p className="font-heading text-lg mb-1">Impact</p>
        <p className="mb-2">{impact}</p>
        <p className="font-heading text-lg mb-1">Stack</p>
        <p className="mb-2">{stack.join(', ')}</p>
        {link && <a href={link} className="underline hover:text-neutral-700 transition-colors">Details</a>}
      </motion.div>
    </motion.article>
  );
} 