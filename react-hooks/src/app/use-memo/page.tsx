'use client';
import { useState, useMemo } from 'react';

function expensiveCalculation(num: number): number {
  console.log('Running expensive calculation...');
  let result = 0;
  for (let i = 0; i < 1e7; i++) {
    result += num * Math.random();
  }
  return result;
}

export default function UseMemoPage() {
  const [number, setNumber] = useState(1);
  const [inc, setInc] = useState(0);

  const calculated = useMemo(() => expensiveCalculation(number), [number]);

  return (
    <main style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>useMemo Hook Demo</h1>
      <p>
        The useMemo hook memoizes expensive calculations to optimize performance.
      </p>

      <div>
        <label>
          Number:{' '}
          <input
            type="number"
            value={number}
            onChange={e => setNumber(parseInt(e.target.value) || 0)}
            style={{ width: '80px', padding: '0.25rem' }}
          />
        </label>
      </div>

      <div style={{ marginTop: '1rem' }}>
        <strong>Calculated Result:</strong> {calculated.toFixed(2)}
      </div>

      <button onClick={() => setInc(inc + 1)} style={{ marginTop: '1rem' }}>
        Re-render without changing number
      </button>
      <p style={{ fontStyle: 'italic', marginTop: '0.5rem' }}>
        (Notice how the expensive calculation doesn’t run unless the number changes)
      </p>
    </main>
  );
}
