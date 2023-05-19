import * as S from './styles';

import EbookCard from 'components/EbookCard';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

import { Ebook } from 'types/types';

export type HomeViewProps = {
  ebookList: Ebook[];
};

export default function HomeView({ ebookList }: HomeViewProps) {
  return (
    <S.Wrapper>
      <S.TitleSection>Destaques</S.TitleSection>

      <Swiper
        wrapperTag="ul"
        modules={[Navigation]}
        slidesPerView={5}
        spaceBetween={60}
        navigation={true}
      >
        {ebookList.map((ebook) => (
          <SwiperSlide key={ebook.id} tag="li">
            <EbookCard {...ebook} />
          </SwiperSlide>
        ))}
      </Swiper>
    </S.Wrapper>
  );
}
