import { GetServerSidePropsResult, InferGetServerSidePropsType } from 'next';

import HeadNext from 'components/HeadNext';
import Header from 'components/Header';
import DashboardView from 'components/Dashboard';

import { GetEbooksPurchased } from 'services/user';
import { EbooksTypeAPI } from 'types/types';

export type Props = {
  ebookDashboardList: EbooksTypeAPI[] | null;
};

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

export const getServerSideProps = async (): Promise<
GetServerSidePropsResult<Props>> => {
  return {
    props: {
      ebookDashboardList: await GetEbooksPurchased(),
    },
  };
};