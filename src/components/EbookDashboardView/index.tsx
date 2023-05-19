import * as S from './styles';

import Image from 'next/image';
import Button from 'components/Button';
import { Ebook } from 'types/types';

export type EbookDashboardViewProps = {
  ebook: Ebook;
};

export default function EbookDashboardView({ ebook }: EbookDashboardViewProps) {
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
        <Button width="85" height="50" label="Baixar" colorType="green" />
      </S.CallToAction>
    </S.Wrapper>
  );
}
