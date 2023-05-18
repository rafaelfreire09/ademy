import router from 'next/router';
import * as S from './styles';

import Image from 'next/image';

export type EbookCardProps = {
  id: number;
  title: string;
  image: string;
  author: string;
  price: number;
  description: string;
  slug: string;
};

export default function EbookCard({
  title,
  image,
  author,
  price,
  description,
  slug,
}: EbookCardProps) {
  const handleClickCard = () => {
    router.push('/ebook/' + slug);
  };

  return (
    <S.Wrapper onClick={handleClickCard}>
      <S.ImageWrapper>
        <S.Image>
          <Image
            src={image}
            fill
            alt={title}
            // style={{
            //   objectFit: 'cover',
            // }}
          />
        </S.Image>
      </S.ImageWrapper>
      <S.Title>{title}</S.Title>
      <S.Author>{author}</S.Author>
      <S.Price>R${price}</S.Price>
    </S.Wrapper>
  );
}
