import dynamic from 'next/dynamic';
import React from 'react';

const HeavyModule = dynamic(() => import('../components/HeavyModule'), {
  loading: () => <p>Loading module...</p>,
  ssr: false,
});

export default function Home() {
  return (
    <main>
      <h1>B\u00e5ttilsyn Next.js</h1>
      <HeavyModule />
    </main>
  );
}
