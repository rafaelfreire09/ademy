import { useRouter } from 'next/navigation';
import * as S from './styles';

import Image from 'next/image';
import { formatPrice } from 'utils/general';

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
  const router = useRouter();

  const handleClickCard = () => {
    router.push('/ebook/' + slug);
  };

  return (
    <S.Wrapper onClick={handleClickCard}>
      <S.ImageWrapper>
        <S.Image>
          <Image src={image} fill alt={title} />
        </S.Image>
      </S.ImageWrapper>
      <S.Title>{title}</S.Title>
      <S.Author>{author}</S.Author>
      <S.Price>{formatPrice(price)}</S.Price>
    </S.Wrapper>
  );
}
