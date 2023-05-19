import Head from 'next/head';
import Header from 'components/Header';
import EbookDashboardView from 'components/EbookDashboardView';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { EbookList } from 'utils/data';

export default function EbookDashboardSlug({
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
      <EbookDashboardView ebook={ebook} />
    </>
  );
}

export const getServerSideProps = async ({
  params,
}: GetServerSidePropsContext) => {
  const slug = params?.ebookDashboardSlug?.at(0);

  const ebook = EbookList.filter((ebook) => ebook.slug == slug);

  return {
    props: {
      ebook: ebook[0],
    },
  };
};
