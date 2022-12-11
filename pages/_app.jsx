import '../styles/globals.css';

import { MantineProvider } from '@mantine/core';
import { Inter } from '@next/font/google';
import { DefaultSeo } from 'next-seo';
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
            <DefaultSeo
              title="BlockWin"
              description="You get blocked and we win"
              canonical="https://blockwin.tk/"
              openGraph={{
                type: 'website',
                locale: 'en',
                url: 'https://blockwin.tk/',
                siteName: 'BlockWin',
              }}
              twitter={{
                cardType: 'summary_large_image',
              }}
            />
            <Component {...pageProps} />
          </div>
        </WalletProvider>
      </AuthProvider>
    </MantineProvider>
  );
};

export default App;
