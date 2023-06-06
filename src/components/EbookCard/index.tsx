import { useRouter } from 'next/navigation';
import * as S from './styles';

import Image from 'next/image';
import { formatPrice } from 'utils/general';
import { EbooksTypeAPI } from 'types/types';

export type EbookCardProps = {
  ebook: EbooksTypeAPI | null
};

export default function EbookCard({
  ebook
}: EbookCardProps) {
  const router = useRouter();

  const handleClickCard = () => {
    router.push('/ebook/' + ebook?.Slug);
  };

  return (
    <S.Wrapper onClick={handleClickCard}>
      <S.ImageWrapper>
        <S.Image>
          <Image src={ebook?.Image || ''} fill alt={ebook?.Title || ''} />
        </S.Image>
      </S.ImageWrapper>
      <S.Title>{ebook?.Title}</S.Title>
      <S.Author>{ebook?.Author}</S.Author>
      <S.Price>{formatPrice(ebook?.Price || 0)}</S.Price>
    </S.Wrapper>
  );
}
