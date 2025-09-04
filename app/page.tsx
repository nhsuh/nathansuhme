'use client';

import { useEffect } from 'react';
import HeroBanner from '@components/HeroBanner';
import MolecularBackground from '@components/MolecularBackground';
import FractalBackground from '@components/FractalBackground';

export default function Home() {
  useEffect(() => {
    // Prevent scrolling on this page only
    document.body.style.overflow = 'hidden';
    
    // Cleanup: restore scrolling when component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  useEffect(() => {
    let animationId: number;
    let mousePos = { x: 0, y: 0 };
    
    // Particle trail system
    const particles: Array<{
      x: number;
      y: number;
      targetX: number;
      targetY: number;
      size: number;
      opacity: number;
      speed: number;
      element: HTMLDivElement;
    }> = [];

    // Create particle elements
    const particleCount = 12;
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'fixed pointer-events-none rounded-full transition-opacity duration-300';
      particle.style.zIndex = '25';
      particle.style.left = '-100px';
      particle.style.top = '-100px';
      
      // Different gradients and sizes for variety
      const gradients = [
        'bg-gradient-to-r from-primary via-accent-purple to-accent-orange',
        'bg-gradient-to-r from-accent-purple via-accent-orange to-primary',
        'bg-gradient-to-r from-accent-orange via-primary to-accent-purple',
        'bg-gradient-to-r from-primary/80 via-accent-purple/80 to-accent-orange/80',
        'bg-gradient-to-r from-accent-purple/60 via-accent-orange/60 to-primary/60'
      ];
      
      const sizes = ['w-2 h-2', 'w-3 h-3', 'w-4 h-4', 'w-5 h-5'];
      const blurs = ['blur-none', 'blur-sm', 'blur-md'];
      
      particle.className += ` ${gradients[i % gradients.length]} ${sizes[i % sizes.length]} ${blurs[i % blurs.length]}`;
      
      document.body.appendChild(particle);
      
      particles.push({
        x: -100,
        y: -100,
        targetX: -100,
        targetY: -100,
        size: parseInt(sizes[i % sizes.length].split(' ')[0].replace('w-', '')) * 4,
        opacity: Math.max(0.1, (particleCount - i) / particleCount * 0.8),
        speed: 0.05 + (i * 0.008), // Slower speeds for trailing effect
        element: particle
      });
      
      particle.style.opacity = particles[i].opacity.toString();
    }

    const animate = () => {
      particles.forEach((particle, index) => {
        // Smooth following with easing
        particle.x += (particle.targetX - particle.x) * particle.speed;
        particle.y += (particle.targetY - particle.y) * particle.speed;
        
        // Add some subtle random movement for organic feel
        const randomX = (Math.random() - 0.5) * 2;
        const randomY = (Math.random() - 0.5) * 2;
        
        particle.element.style.left = `${particle.x - particle.size/2 + randomX}px`;
        particle.element.style.top = `${particle.y - particle.size/2 + randomY}px`;
        
        // Pulsing effect
        const pulseScale = 1 + Math.sin(Date.now() * 0.003 + index) * 0.1;
        particle.element.style.transform = `scale(${pulseScale}) rotate(${Date.now() * 0.001 + index}rad)`;
      });
      
      animationId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.x = e.clientX;
      mousePos.y = e.clientY;
      
      // Update particle targets with staggered delays
      particles.forEach((particle, index) => {
        setTimeout(() => {
          particle.targetX = mousePos.x;
          particle.targetY = mousePos.y;
        }, index * 50); // Staggered delay for trail effect
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      // Clean up particles
      particles.forEach(particle => {
        if (particle.element.parentNode) {
          particle.element.parentNode.removeChild(particle.element);
        }
      });
    };
  }, []);

  return (
    <main className="h-screen overflow-hidden">
      <FractalBackground />
      <section id="hero" className="snap-start h-screen flex items-center justify-center relative">
        <MolecularBackground />
        <div className="relative z-10">
          <HeroBanner />
        </div>
      </section>
    </main>
  );
} 