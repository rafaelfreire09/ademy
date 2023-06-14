import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';

import HeadNext from 'components/HeadNext';
import Header from 'components/Header';
import EbookDashboardView from 'components/EbookDashboardView';
import { GetEbookInfoBySlug } from 'services/ebook';

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
