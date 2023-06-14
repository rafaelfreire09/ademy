import * as S from './styles';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Button from 'components/Button';
import { Ebook } from 'types/types';
import { DownloadEbookBySrc } from 'services/ebook';

export type EbookDashboardViewProps = {
  ebook: Ebook;
};

export default function EbookDashboardView({ ebook }: EbookDashboardViewProps) {
  const router = useRouter();

  const handleClickOnDownload = async () => {
    const response = await DownloadEbookBySrc(ebook.slug)

    if (response?.Src) {
      router.push(response?.Src)
    }
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
        <Button
          width="85"
          height="50"
          label="Baixar"
          colorType="green"
          onClick={handleClickOnDownload}
        />
      </S.CallToAction>
    </S.Wrapper>
  );
}
