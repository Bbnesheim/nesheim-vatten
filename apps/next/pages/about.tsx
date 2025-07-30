import React from 'react';
import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>B\u00e5ttilsyn Next.js - Om oss</title>
        <meta
          name="description"
          content="Informasjon om B\u00e5ttilsyn Next.js"
        />
      </Head>
      <main>
        <h1>Om oss</h1>
        <p>Dette er en forenklet Next.js-versjon av B\u00e5ttilsyn.</p>
      </main>
    </>
  );
}
