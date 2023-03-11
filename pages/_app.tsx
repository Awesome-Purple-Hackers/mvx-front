import '../styles/globals.css';

import '@fontsource/poppins/100.css';
import '@fontsource/poppins/200.css';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';
import '@fontsource/poppins/900.css';

import '../styles/tailwind.css';

import type { AppProps } from 'next/app';
import { useNetworkSync } from '../hooks/auth/useNetworkSync';

const NextJSDappTemplate = ({ Component, pageProps }: AppProps) => {
  useNetworkSync();
  return <Component {...pageProps} />;
};

export default NextJSDappTemplate;
