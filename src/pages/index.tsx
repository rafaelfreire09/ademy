import Head from 'next/head';
import { InferGetServerSidePropsType } from 'next';

import Header from 'components/Header';
import HomeView from 'components/HomeView';

import { EbookList } from 'utils/data';

export default function Home({
  ebookList,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>Ademy</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <HomeView ebookList={ebookList} />
    </>
  );
}

export const getServerSideProps = async () => {
  const getEbookList = EbookList;

  return {
    props: {
      ebookList: getEbookList,
    },
  };
};
