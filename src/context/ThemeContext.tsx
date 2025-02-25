import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ThemeType } from '../types';

interface ThemeContextType {
  theme: ThemeType;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeType>(() => {
    const savedTheme = localStorage.getItem('theme');
    return (savedTheme as ThemeType) || 'light';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

// App component with dynamic theme styles
export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`${theme === 'dark' ? 'bg-backgroundDark text-textDark' : 'bg-backgroundLight text-textLight'} min-h-screen transition-all duration-300`}>
      <header className="py-4">
        <button onClick={toggleTheme} className="px-4 py-2  dark:bg-primaryDark rounded-md">
          Toggle Theme
        </button>
      </header>

      <main className="p-6">
        <h1 className="text-3xl font-semibold">Welcome to the Global Coding Club Hackathon!</h1>
        <p className="mt-4">This page will automatically adjust based on the selected theme (light or dark).</p>
      </main>
    </div>
  );
}
