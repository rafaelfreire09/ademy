import HeadNext from 'components/infra/HeadNext';
import Header from 'components/layout/Header';
import DashboardView from 'components/views/Dashboard';

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
