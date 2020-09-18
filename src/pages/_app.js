import React, { useEffect, useState } from 'react';
import 'styles/globals.css';

function MyApp(props) {
  const { Component, pageProps } = props;
  const [showUI, setShowUI] = useState(false);

  useEffect(() => {
    setShowUI(true);
  }, []);

  return (
    <div style={{ display: showUI ? 'block' : 'none' }}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
