'use client';
import { useReducer } from 'react';

type State = { count: number };
type Action = { type: 'increment' } | { type: 'decrement' } | { type: 'reset' };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      return state;
  }
}

export default function UseReducerPage() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <main style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>✨ useReducer Hook Demo</h1>
      <p>
        The <code>useReducer</code> hook manages complex state logic with a reducer function.
      </p>
      <div style={{ marginTop: '1.5rem' }}>
        <strong>Count:</strong> {state.count}
      </div>
      <div style={{ marginTop: '1rem' }}>
        <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>{' '}
        <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>{' '}
        <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      </div>
    </main>
  );
}
