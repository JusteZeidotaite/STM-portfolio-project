import React from 'react';
import '@/styles/globals.css'; // Import global CSS from the styles folder

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
