import { AuthProvider } from 'context/AuthProvider';
import type { AppProps } from 'next/app';

import GlobalStyles from 'styles/GlobalStyles';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </>
  );
}
