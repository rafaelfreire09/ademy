import * as S from './styles';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Button from 'components/Button';
import { EbooksTypeAPI } from 'types/types';
import { DownloadEbookBySrc } from 'services/ebook';

export type EbookDashboardViewProps = {
  ebook: EbooksTypeAPI | null;
};

export default function EbookDashboardView({ ebook }: EbookDashboardViewProps) {
  const router = useRouter();

  const handleClickOnDownload = async () => {
    const response = await DownloadEbookBySrc(ebook?.Slug || '')

    if (response?.Src) {
      router.push(response?.Src)
    }
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
