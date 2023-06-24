import { GetServerSidePropsResult, InferGetServerSidePropsType } from 'next';

import HeadNext from 'components/HeadNext';
import Header from 'components/Header';
import DashboardView from 'components/Dashboard';

import { GetEbooksPurchased } from 'services/user';
import { EbooksTypeAPI } from 'types/types';

export type Props = {
  ebookDashboardList: EbooksTypeAPI[] | null;
};

export default function Dashboard() {
  return (
    <>
      <HeadNext />
      <Header />
      <DashboardView />
    </>
  );
}
