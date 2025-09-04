'use client';
import { useEffect, useRef } from 'react';

export default function FractalBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const animationRef = useRef<number>();
  const dragonsRef = useRef<Array<{
    startX: number;
    startY: number;
    sequence: string;
    growth: number;
    age: number;
    colorOffset: number;
  }>>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    updateCanvasSize();

    // Purple gradient colors only
    const colors = [
      [147, 51, 234],  // purple-600
      [168, 85, 247],  // accent-purple  
      [196, 181, 253], // purple-300
      [139, 69, 219],  // purple-500
      [124, 58, 237],  // purple-600
    ];

    // Generate dragon curve sequence
    const generateDragonSequence = (iterations: number): string => {
      let sequence = 'F';
      for (let i = 0; i < iterations; i++) {
        sequence = sequence.replace(/F/g, 'F+G');
        sequence = sequence.replace(/G/g, 'F-G');
      }
      return sequence;
    };

    // Draw dragon curve from sequence
    const drawDragonCurve = (
      startX: number, 
      startY: number, 
      sequence: string, 
      length: number, 
      growth: number,
      colorOffset: number,
      age: number
    ) => {
      let x = startX;
      let y = startY;
      let angle = 0;
      const angleIncrement = Math.PI / 2; // 90 degrees
      
      ctx.lineWidth = 2 + Math.sin(age * 0.01) * 1;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      
      const maxLength = Math.min(sequence.length * growth, sequence.length);
      
      for (let i = 0; i < maxLength; i++) {
        const char = sequence[i];
        const progress = i / sequence.length;
        
        // Animated color cycling
        const colorIndex = (progress * 3 + colorOffset + age * 0.001) % colors.length;
        const colorA = colors[Math.floor(colorIndex)];
        const colorB = colors[Math.ceil(colorIndex) % colors.length];
        const t = colorIndex - Math.floor(colorIndex);
        
        const r = Math.floor(colorA[0] * (1 - t) + colorB[0] * t);
        const g = Math.floor(colorA[1] * (1 - t) + colorB[1] * t);
        const b = Math.floor(colorA[2] * (1 - t) + colorB[2] * t);
        
        // Fade in/out based on age and distance from mouse
        const distanceFromMouse = Math.sqrt(
          Math.pow(x - mouseRef.current.x, 2) + Math.pow(y - mouseRef.current.y, 2)
        );
        const maxDistance = 400;
        const distanceFade = Math.max(0, 1 - distanceFromMouse / maxDistance);
        const ageFade = Math.min(1, age / 100) * Math.max(0, 1 - age / 2000);
        const alpha = distanceFade * ageFade * 0.8;
        
        ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
        
        if (char === 'F' || char === 'G') {
          const nextX = x + Math.cos(angle) * length;
          const nextY = y + Math.sin(angle) * length;
          
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(nextX, nextY);
          ctx.stroke();
          
          x = nextX;
          y = nextY;
        } else if (char === '+') {
          angle += angleIncrement;
        } else if (char === '-') {
          angle -= angleIncrement;
        }
      }
    };

    const animate = () => {
      const { width, height } = canvas;
      
      // Clear canvas completely - no trail effect
      ctx.clearRect(0, 0, width, height);
      
      const time = Date.now();
      
      // Age existing dragons and remove old ones
      dragonsRef.current = dragonsRef.current.filter(dragon => {
        dragon.age += 1;
        dragon.growth = Math.min(1, dragon.growth + 0.01);
        return dragon.age < 2000; // Remove after 2000 frames
      });
      
      // Draw all dragons
      dragonsRef.current.forEach(dragon => {
        const dynamicLength = 3 + Math.sin(dragon.age * 0.002) * 1;
        drawDragonCurve(
          dragon.startX,
          dragon.startY,
          dragon.sequence,
          dynamicLength,
          dragon.growth,
          dragon.colorOffset,
          dragon.age
        );
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };

    // Mouse tracking - spawn new dragon on movement
    let lastSpawnTime = 0;
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      
      const currentTime = Date.now();
      if (currentTime - lastSpawnTime > 200) { // Throttle spawning
        const iterations = 8 + Math.floor(Math.random() * 4); // 8-11 iterations
        const sequence = generateDragonSequence(iterations);
        
        dragonsRef.current.push({
          startX: e.clientX,
          startY: e.clientY,
          sequence,
          growth: 0,
          age: 0,
          colorOffset: Math.random() * colors.length
        });
        
        // Limit number of dragons for performance
        if (dragonsRef.current.length > 8) {
          dragonsRef.current.shift(); // Remove oldest
        }
        
        lastSpawnTime = currentTime;
      }
    };

    // Start animation
    animate();
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', updateCanvasSize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-5"
      style={{
        mixBlendMode: 'screen'
      }}
    />
  );
}
