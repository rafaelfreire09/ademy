import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';

import HeadNext from 'components/HeadNext';
import Header from 'components/Header';
import EbookView from 'components/EbookView';

import { EbookList } from 'utils/data';

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

  const ebook = EbookList.filter((ebook) => ebook.slug == slug);

  return {
    props: {
      ebook: ebook[0],
    },
  };
};
