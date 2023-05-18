import Head from 'next/head';
import Header from 'components/Header';
import HomeView from 'components/HomeView';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ademy</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <HomeView />
    </>
  );
}
