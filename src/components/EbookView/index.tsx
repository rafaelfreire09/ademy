import * as S from './styles';

import Image from 'next/image';
import Button from 'components/Button';
import { Ebook } from 'types/types';

export type EbookViewProps = {
  ebook: Ebook;
};

export default function EbookView({ ebook }: EbookViewProps) {
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
        <S.Price>R${ebook.price}</S.Price>
        <Button width="85" height="50" label="Comprar" colorType="green" />
      </S.CallToAction>
    </S.Wrapper>
  );
}
