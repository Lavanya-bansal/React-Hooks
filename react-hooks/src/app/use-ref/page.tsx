'use client';
import { useRef, useState } from 'react';

export default function UseRefPage() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState('');

  function focusInput() {
    inputRef.current?.focus();
  }

  return (
    <main style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>useRef Hook Demo</h1>
      <p>
        The useRef hook holds a mutable value and can directly access DOM elements.
      </p>

      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Type something..."
        style={{ padding: '0.5rem', fontSize: '1rem', marginRight: '1rem' }}
      />

      <button onClick={focusInput} style={{ padding: '0.5rem 1rem' }}>
        Focus Input
      </button>
    </main>
  );
}
