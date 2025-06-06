'use client';
import React, { useEffect, useState } from 'react';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)');
    const classList = document.documentElement.classList;
    function updateTheme() {
      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && systemDark.matches)) {
        classList.add('dark');
      } else {
        classList.remove('dark');
      }
    }
    updateTheme();
    systemDark.addEventListener('change', updateTheme);
    return () => systemDark.removeEventListener('change', updateTheme);
  }, []);

  if (!mounted) return null;
  return <>{children}</>;
} 