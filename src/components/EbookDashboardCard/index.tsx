import { useRouter } from 'next/navigation';
import * as S from './styles';

import Image from 'next/image';

export type EbookDashboardCardProps = {
  id: number;
  title: string;
  image: string;
  author: string;
  price: number;
  description: string;
  slug: string;
};

export default function EbookDashboardCard({
  title,
  image,
  author,
  slug,
}: EbookDashboardCardProps) {
  const router = useRouter();

  const handleClickCard = () => {
    router.push('/profile/dashboard/' + slug);
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
    </S.Wrapper>
  );
}
