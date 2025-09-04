'use client';

import { useEffect, useState } from 'react';
import HeroBanner from '@components/HeroBanner';
import MolecularBackground from '@components/MolecularBackground';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Prevent scrolling on this page only
    document.body.style.overflow = 'hidden';
    
    // Cleanup: restore scrolling when component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <main className="h-screen overflow-hidden">
      {/* Gradient Mouse Follower */}
      <div 
        className="fixed w-6 h-6 bg-gradient-to-r from-primary via-accent-purple to-accent-orange rounded-full blur-sm opacity-30 pointer-events-none z-30 transition-all duration-100 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
        }}
      />
      <div 
        className="fixed w-12 h-12 bg-gradient-to-r from-accent-purple/20 via-accent-orange/20 to-primary/20 rounded-full blur-md pointer-events-none z-20 transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 24,
          top: mousePosition.y - 24,
        }}
      />
      
      <section id="hero" className="snap-start h-screen flex items-center justify-center relative">
        <MolecularBackground />
        <div className="relative z-10">
          <HeroBanner />
        </div>
      </section>
    </main>
  );
} 