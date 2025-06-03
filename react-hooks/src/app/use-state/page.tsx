'use client';
import { useState } from 'react';

export default function UseStatePage() {
  const [count, setCount] = useState(0);

  return (
    <main style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1> useState Hook Demo</h1>
      <p>
        The useState hook lets you add state to functional components.
        Here, you can see a simple counter that updates its value on each button click.
      </p>

      <div style={{ marginTop: '1.5rem' }}>
        <strong>Count:</strong> {count}
      </div>

      <button
        style={{
          marginTop: '1rem',
          padding: '0.5rem 1rem',
          fontSize: '1rem',
          cursor: 'pointer',
          borderRadius: '5px',
          border: 'none',
          backgroundColor: '#0070f3',
          color: 'white',
        }}
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </main>
  );
}
