import * as S from './styles';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

import { useAppDispatch } from 'hooks/redux';
import { addToCart } from 'redux/cartSlice';

import Button from 'components/shared/Button';

import { formatPrice } from 'utils/general';
import { EbooksTypeAPI } from 'types/types';

export type EbookViewProps = {
  ebook: EbooksTypeAPI | null;
};

export default function EbookView({ ebook }: EbookViewProps) {
  const router = useRouter();

  const dispatch = useAppDispatch();

  const handleClickOnBuy = () => {
    dispatch(
      addToCart({
        id: ebook?.EbookID || 0,
        title: ebook?.Title || '',
        slug: ebook?.Slug || '',
        image: ebook?.Image || '',
        price: ebook?.Price || 0,
        quantity: 1,
      })
    );

    router.push('/cart');
  };

  return (
    <S.Wrapper>
      <S.ImageWrapper>
        <S.Image>
          <Image src={ebook?.Image || ''} fill alt={ebook?.Title || ''} />
        </S.Image>
      </S.ImageWrapper>
      <S.Content>
        <S.Title>{ebook?.Title}</S.Title>
        <S.Author>{ebook?.Author}</S.Author>
        <S.Description>{ebook?.Description}</S.Description>
      </S.Content>
      <S.CallToAction>
        <S.Price>{formatPrice(ebook?.Price || 0)}</S.Price>
        <Button
          width="90"
          height="50"
          label="Comprar"
          colorType="green"
          onClick={handleClickOnBuy}
        />
      </S.CallToAction>
    </S.Wrapper>
  );
}
