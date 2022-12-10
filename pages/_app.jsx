import '../styles/globals.css';

import { MantineProvider } from '@mantine/core';
import { Inter } from '@next/font/google';
import { useEffect } from 'react';
import { AuthProvider } from '../context/auth';
import { WalletProvider } from '../context/wallet';
import initialize from '../services/firebase';

const inter = Inter({ subsets: ['latin'] });

// eslint-disable-next-line react/prop-types
const App = ({ Component, pageProps }) => {
  useEffect(() => {
    initialize();
  }, []);

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: 'dark',
      }}
    >
      <AuthProvider>
        <WalletProvider>
          <div
            style={{
              height: '100%',
              width: '100%',
              ...inter.style,
            }}
          >
            <Component {...pageProps} />
          </div>
        </WalletProvider>
      </AuthProvider>
    </MantineProvider>
  );
};

export default App;
