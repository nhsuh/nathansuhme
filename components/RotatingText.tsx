'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const workAreas = [
  { prefix: "Building for", emphasis: "Legal" },
  { prefix: "Building for", emphasis: "Finance" },
  { prefix: "Building for", emphasis: "Consumer" },
  { prefix: "Built for", emphasis: "Marketing" },
  { prefix: "Built for", emphasis: "Banking" },
  { prefix: "Built for", emphasis: "Home Daycares" },
  { prefix: "Researched for", emphasis: "Fetal Imaging" },
  { prefix: "Researched for", emphasis: "Dystonia Diagnosis" }
];

export default function RotatingText() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isManuallyTriggered, setIsManuallyTriggered] = useState(false);

  useEffect(() => {
    if (isManuallyTriggered) {
      const resetTimer = setTimeout(() => {
        setIsManuallyTriggered(false);
      }, 500);
      return () => clearTimeout(resetTimer);
    }

    const timer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % workAreas.length);
    }, 4000);

    return () => clearTimeout(timer);
  }, [currentIndex, isManuallyTriggered]);

  const handleClick = () => {
    setIsManuallyTriggered(true);
    setCurrentIndex((prev) => (prev + 1) % workAreas.length);
  };

  const currentArea = workAreas[currentIndex];

  return (
    <div 
      className="relative h-20 w-96 mx-auto cursor-pointer select-none px-4 py-2 border border-gray-300/20 dark:border-gray-600/20 rounded-lg bg-gray-50/10 dark:bg-gray-800/10 backdrop-blur-sm transition-colors duration-300 hover:border-primary/30 hover:bg-primary/5"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
      aria-label="Click to cycle through work areas"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 160,
            damping: 26,
            mass: 1.2
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <span className="font-body text-lg md:text-xl text-gray-400 dark:text-gray-300">
            {currentArea.prefix}{' '}
            <span className="font-semibold italic" style={{ color: '#FF9A85' }}>
              {currentArea.emphasis}
            </span>
          </span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
} 