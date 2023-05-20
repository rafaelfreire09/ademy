import { InferGetServerSidePropsType } from 'next';

import HeadNext from 'components/HeadNext';
import Header from 'components/Header';
import HomeView from 'components/HomeView';

import { EbookList } from 'utils/data';

export default function Home({
  ebookList,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <HeadNext />
      <Header />
      <HomeView ebookList={ebookList} />
    </>
  );
}

export const getServerSideProps = async () => {
  const getEbookList = EbookList;

  return {
    props: {
      ebookList: getEbookList,
    },
  };
};
