import { useEffect, useState } from 'react';
import { Car, Moon, Sun, User } from 'lucide-react';

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'system';
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldDark = saved === 'dark' || (saved === 'system' && prefersDark);
    setIsDark(shouldDark);
    document.documentElement.classList.toggle('dark', shouldDark);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-neutral-900/60 border-b border-neutral-200/70 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-600 flex items-center justify-center text-white shadow">
            <Car size={20} />
          </div>
          <span className="font-semibold text-lg tracking-tight text-neutral-900 dark:text-neutral-100">Wheelix</span>
          <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">Smart Garage Finder</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-600 dark:text-neutral-300">
          <a href="#search" className="hover:text-neutral-900 dark:hover:text-white">Search</a>
          <a href="#garages" className="hover:text-neutral-900 dark:hover:text-white">Garages</a>
          <a href="#how" className="hover:text-neutral-900 dark:hover:text-white">How it works</a>
        </nav>
        <div className="flex items-center gap-2">
          <button
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 dark:border-neutral-800 px-3 py-2 text-sm text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800"
          >
            {isDark ? <Moon size={16} /> : <Sun size={16} />}
            <span className="hidden sm:inline">{isDark ? 'Dark' : 'Light'}</span>
          </button>
          <button className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-3 py-2 text-sm font-medium">
            <User size={16} />
            <span className="hidden sm:inline">Sign in</span>
          </button>
        </div>
      </div>
    </header>
  );
}
