import { GetServerSidePropsResult, InferGetServerSidePropsType } from 'next';

import HeadNext from 'components/HeadNext';
import Header from 'components/Header';
import HomeView from 'components/HomeView';

import { GetFeaturedEbooks } from 'services/ebook';
import { EbooksTypeAPI } from 'types/types';

export type Props = {
  ebookList: EbooksTypeAPI[] | null;
};

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

export const getServerSideProps = async (): Promise<
GetServerSidePropsResult<Props>> => {
  return {
    props: {
      ebookList: await GetFeaturedEbooks(),
    },
  };
};
