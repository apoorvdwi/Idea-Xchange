import '../styles/globals.scss';

import { ChakraProvider } from '@chakra-ui/react';
import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head';

import Navbar from '../components/Navbar';
import { GlobalProvider } from '../context';
import theme from '../styles/theme';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Idea Xchange</title>
      </Head>
      <GlobalProvider>
        <ChakraProvider theme={theme}>
          <Navbar />
          <Component {...pageProps} />
          <Analytics />
        </ChakraProvider>
      </GlobalProvider>
    </>
  );
};

export default MyApp;
