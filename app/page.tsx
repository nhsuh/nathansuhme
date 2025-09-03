'use client';

import { useEffect } from 'react';
import HeroBanner from '@components/HeroBanner';
import MolecularBackground from '@components/MolecularBackground';

export default function Home() {
  useEffect(() => {
    // Prevent scrolling on this page only
    document.body.style.overflow = 'hidden';
    
    // Cleanup: restore scrolling when component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <main className="h-screen overflow-hidden">
      <section id="hero" className="snap-start h-screen flex items-center justify-center relative">
        <MolecularBackground />
        <div className="relative z-10">
          <HeroBanner />
        </div>
      </section>
    </main>
  );
} 