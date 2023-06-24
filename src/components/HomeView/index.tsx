import * as S from './styles';

import EbookCard from 'components/EbookCard';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

import { EbooksTypeAPI } from 'types/types';

export type HomeViewProps = {
  ebookList: EbooksTypeAPI[] | null;
};

export default function HomeView({ ebookList }: HomeViewProps) {
  return (
    <S.Wrapper>
      <S.TitleSection>Destaques</S.TitleSection>

      <S.SwipperSection>
        <Swiper
          wrapperTag="ul"
          modules={[Navigation]}
          slidesPerView={5}
          spaceBetween={60}
          navigation={true}
        >
          {ebookList?.map((ebook) => (
            <SwiperSlide key={ebook.EbookID} tag="li">
              <EbookCard ebook={ebook} />
            </SwiperSlide>
          ))}
        </Swiper>
      </S.SwipperSection>
    </S.Wrapper>
  );
}
