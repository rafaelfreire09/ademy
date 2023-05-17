import Head from 'next/head';
import Header from 'components/Header';
import AuthView from 'components/AuthView';

export default function Auth() {
  return (
    <>
      <Head>
        <title>Ademy</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <AuthView />
    </>
  );
}
