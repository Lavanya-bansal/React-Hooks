import Link from 'next/link';

const hooks = [
  { name: 'useState', path: '/use-state' },
  { name: 'useEffect', path: '/use-effect' },
  { name: 'useReducer', path: '/use-reducer' },
  { name: 'useRef', path: '/use-ref' },
  { name: 'useContext', path: '/use-context' },
  { name: 'useMemo', path: '/use-memo' },
  { name: 'useCallback', path: '/use-callback' },
];

export default function HomePage() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>React Hooks Demo</h1>
      <p>Explore each hook by clicking the links below:</p>
      <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
        {hooks.map(({ name, path }) => (
          <li key={name} style={{ margin: '0.75rem 0' }}>
            <Link href={path}>
                {name}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
