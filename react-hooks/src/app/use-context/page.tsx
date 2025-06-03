'use client';
import React, { createContext, useContext, useState } from 'react';

// Create a context
const ThemeContext = createContext<{ theme: string; toggleTheme: () => void } | undefined>(undefined);

export default function UseContextPage() {
  return (
    <ThemeProvider>
      <ThemedComponent />
    </ThemeProvider>
  );
}

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState('light');

  function toggleTheme() {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

function ThemedComponent() {
  const context = useContext(ThemeContext);

  if (!context) throw new Error('ThemedComponent must be used within ThemeProvider');

  return (
    <div
      style={{
        padding: '2rem',
        backgroundColor: context.theme === 'light' ? '#eee' : '#333',
        color: context.theme === 'light' ? '#333' : '#eee',
        borderRadius: '8px',
      }}
    >
      <h1>✨ useContext Hook Demo</h1>
      <p>Current Theme: {context.theme}</p>
      <button onClick={context.toggleTheme}>Toggle Theme</button>
    </div>
  );
}
