import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';

import EbookDashboardView from 'components/views/EbookDashboard';
import { GetEbookInfoBySlug } from 'services/ebook';
import HeadNext from 'components/infra/HeadNext';
import Header from 'components/layout/Header';

export default function EbookDashboardSlug({
  ebook,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <HeadNext />
      <Header />
      <EbookDashboardView ebook={ebook} />
    </>
  );
}

export const getServerSideProps = async ({
  params,
}: GetServerSidePropsContext) => {
  const slug = params?.ebookDashboardSlug?.at(0);

  const ebook = await GetEbookInfoBySlug(slug ? slug : '');

  return {
    props: {
      ebook: ebook,
    },
  };
};
