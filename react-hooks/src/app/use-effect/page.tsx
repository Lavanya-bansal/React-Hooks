'use client';
import { useState, useEffect } from 'react';

export default function UseEffectPage() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  return (
    <main style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>useEffect Hook Demo</h1>
      <p>
        The useEffect hook lets you perform side effects in function components.
        Here, we update the clock every second.
      </p>
      <div style={{ marginTop: '1.5rem', fontSize: '1.5rem' }}>Current Time: {time}</div>
    </main>
  );
}
