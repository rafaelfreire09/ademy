import { AuthProvider } from 'context/AuthProvider';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from 'redux/store';

import GlobalStyles from 'styles/GlobalStyles';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Provider store={store}>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </Provider>
    </>
  );
}
