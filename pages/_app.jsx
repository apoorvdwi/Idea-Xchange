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
        <meta name='title' content='Idea Xchange' />
        <meta
          name='description'
          content='Find the idea for your next project/startup posted by people all over the world. Alternatively, post your idea over the platform and allow people to comment on the idea.'
        />

        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://www.ideaxchange.space/' />
        <meta property='og:title' content='Idea Xchange' />
        <meta
          property='og:description'
          content='Find the idea for your next project/startup posted by people all over the world. Alternatively, post your idea over the platform and allow people to comment on the idea.'
        />
        <meta
          property='og:image'
          content='https://www.ideaxchange.space/images/landing.png'
        />

        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://www.ideaxchange.space/' />
        <meta property='twitter:title' content='Idea Xchange' />
        <meta
          property='twitter:description'
          content='Find the idea for your next project/startup posted by people all over the world. Alternatively, post your idea over the platform and allow people to comment on the idea.'
        />
        <meta
          property='twitter:image'
          content='https://www.ideaxchange.space/images/landing.png'
        />
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
