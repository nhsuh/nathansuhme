'use client';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggle = () => {
    const classList = document.documentElement.classList;
    if (classList.contains('dark')) {
      classList.remove('dark');
      localStorage.theme = 'light';
      setIsDark(false);
    } else {
      classList.add('dark');
      localStorage.theme = 'dark';
      setIsDark(true);
    }
  };

  return (
    <button onClick={toggle} aria-label="Toggle theme" className="fixed bottom-4 right-4 p-2 bg-primary rounded-full shadow-lg">
      {isDark ? '🌞' : '🌙'}
    </button>
  );
} 