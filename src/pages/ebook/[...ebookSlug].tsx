import Head from 'next/head';
import Header from 'components/Header';
import EbookView from 'components/EbookView';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { EbookList } from 'utils/data';
import { Ebook } from 'types/types';

export default function EbookSlug({
  ebook,
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
