import { InferGetServerSidePropsType } from 'next';

import HeadNext from 'components/HeadNext';
import Header from 'components/Header';
import DashboardView from 'components/Dashboard';

import { EbookList } from 'utils/data';

export default function Dashboard({
  ebookDashboardList,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <HeadNext />
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
