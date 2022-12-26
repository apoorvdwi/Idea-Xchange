import '../styles/globals.scss';

import { ChakraProvider } from '@chakra-ui/react';
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
        </ChakraProvider>
      </GlobalProvider>
    </>
  );
};

export default MyApp;
