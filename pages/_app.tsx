import { useState } from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { CreatorContextProvider } from '../context/creatorContext';

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <CreatorContextProvider>
          <Component {...pageProps} />
        </CreatorContextProvider>
        <ReactQueryDevtools />
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
