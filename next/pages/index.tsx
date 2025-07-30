import dynamic from 'next/dynamic';
import React from 'react';
import Head from 'next/head';
import type { HeavyModuleProps } from '../components/HeavyModule';

const HeavyModule = dynamic<HeavyModuleProps>(
  () => import('../components/HeavyModule'),
  {
    loading: () => <p>Loading module...</p>,
    ssr: false,
  }
);

export default function Home() {
  return (
    <>
      <Head>
        <title>B\u00e5ttilsyn Next.js - Home</title>
        <meta
          name="description"
          content="B\u00e5ttilsyn Next.js example home page"
        />
      </Head>
      <main>
        <h1>B\u00e5ttilsyn Next.js</h1>
        <HeavyModule content="This module could load large libraries like charts or PDF viewers." />
      </main>
    </>
  );
}
