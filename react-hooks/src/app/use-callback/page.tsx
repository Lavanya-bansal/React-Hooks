'use client';
import { useState, useCallback } from 'react';

function Button({ handleClick, children }: { handleClick: () => void; children: React.ReactNode }) {
  console.log(`Rendering button: ${children}`);
  return (
    <button onClick={handleClick} style={{ margin: '0.5rem', padding: '0.5rem 1rem' }}>
      {children}
    </button>
  );
}

export default function UseCallbackPage() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  // Without useCallback, handleClick increments is recreated on every render,
  // causing unnecessary re-renders in child components.
  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  return (
    <main style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>useCallback Hook Demo</h1>
      <p>
        The useCallback hook memoizes functions so they’re recreated only when dependencies change.
      </p>

      <div style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          value={text}
          placeholder="Type something..."
          onChange={e => setText(e.target.value)}
          style={{ padding: '0.5rem', fontSize: '1rem', marginRight: '1rem' }}
        />
        <span>Input value: {text}</span>
      </div>

      <div>
        <Button handleClick={increment}>Increment Count</Button>
      </div>

      <div style={{ marginTop: '1rem', fontWeight: 'bold' }}>
        Count: {count}
      </div>
    </main>
  );
}
