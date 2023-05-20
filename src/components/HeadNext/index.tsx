import Head from 'next/head';
import * as S from './styles';

export type HeadNextProps = {
  title?: string;
};

export default function HeadNext({ title = 'Ademy' }: HeadNextProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      {/* <S.Title>{title}</S.Title>
      <S.Meta name="description" content="" />
      <S.Meta name="viewport" content="width=device-width, initial-scale=1" />
      <S.Link rel="icon" href="/favicon.ico" /> */}
    </Head>
  );
}
