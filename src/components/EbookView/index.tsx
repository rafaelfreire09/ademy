import * as S from './styles';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import { useAppDispatch } from 'hooks/redux';

import Button from 'components/Button';

import { Ebook } from 'types/types';
import { addToCart } from 'redux/cartSlice';
import { formatPrice } from 'utils/general';

export type EbookViewProps = {
  ebook: Ebook;
};

export default function EbookView({ ebook }: EbookViewProps) {
  const router = useRouter();

  const dispatch = useAppDispatch();

  const handleClickOnBuy = () => {
    dispatch(
      addToCart({
        id: ebook.id,
        title: ebook.title,
        slug: ebook.slug,
        image: ebook.image,
        price: ebook.price,
        quantity: 1,
      })
    );

    router.push('/cart');
  };

  return (
    <S.Wrapper>
      <S.ImageWrapper>
        <S.Image>
          <Image src={ebook.image} fill alt={ebook.title} />
        </S.Image>
      </S.ImageWrapper>
      <S.Content>
        <S.Title>{ebook.title}</S.Title>
        <S.Author>{ebook.author}</S.Author>
        <S.Description>{ebook.description}</S.Description>
      </S.Content>
      <S.CallToAction>
        <S.Price>{formatPrice(ebook.price)}</S.Price>
        <Button
          width="85"
          height="50"
          label="Comprar"
          colorType="green"
          onClick={handleClickOnBuy}
        />
      </S.CallToAction>
    </S.Wrapper>
  );
}
