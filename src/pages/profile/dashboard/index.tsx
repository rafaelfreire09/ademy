import Head from 'next/head';
import { InferGetServerSidePropsType } from 'next';

import Header from 'components/Header';
import DashboardView from 'components/Dashboard';

import { EbookList } from 'utils/data';

export default function Dashboard({
  ebookDashboardList,
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
      <DashboardView ebookDashboardList={ebookDashboardList} />
    </>
  );
}

export const getServerSideProps = async () => {
  const getEbookList = EbookList;

  return {
    props: {
      ebookDashboardList: getEbookList,
    },
  };
};
