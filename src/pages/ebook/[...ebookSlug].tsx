import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';

import EbookView from 'components/views/Ebook';

import { GetEbookInfoBySlug } from 'services/ebook';
import HeadNext from 'components/infra/HeadNext';
import Header from 'components/layout/Header';

export default function EbookSlug({
  ebook,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <HeadNext />
      <Header />
      <EbookView ebook={ebook} />
    </>
  );
}

export const getServerSideProps = async ({
  params,
}: GetServerSidePropsContext) => {
  const slug = params?.ebookSlug?.at(0);

  const ebook = await GetEbookInfoBySlug(slug ? slug : '');

  return {
    props: {
      ebook: ebook,
    },
  };
};
