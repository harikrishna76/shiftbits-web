import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import 'styles/globals.css';

function MyApp(props) {
  const { Component, pageProps } = props;
  const [showUI, setShowUI] = useState(false);

  useEffect(() => {
    setShowUI(true);
  }, []);

  return (
    <div style={{ display: showUI ? 'block' : 'none' }}>
      <Head>
        <title>ShiftBits - Coming Soon</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
