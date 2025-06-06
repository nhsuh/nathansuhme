'use client';

import HeroBanner from '@components/HeroBanner';
import WorkSection from '@components/WorkSection';
import TechDeepDive from '@components/TechDeepDive';
import ThoughtStream from '@components/ThoughtStream';
import AboutSection from '@components/AboutSection';
import MolecularBackground from '@components/MolecularBackground';

export default function Home() {
  return (
    <main className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">
      <section id="hero" className="snap-start h-screen flex items-center justify-center relative">
        <MolecularBackground />
        <div className="relative z-10">
          <HeroBanner />
        </div>
      </section>
    </main>
  );
} 