import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
// import Swiper styles
import 'swiper/css';

import '@fortawesome/fontawesome-free/css/all.min.css';
import '@/styles/globals.css';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
import '@/styles/colors.css';

/**
 * !STARTERCONF info
 * ? `Layout` component is called in every page using `np` snippets. If you have consistent layout across all page, you can add it here too
 */

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
