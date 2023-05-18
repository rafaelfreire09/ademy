import * as S from './styles';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import EbookCard from 'components/EbookCard';

import 'swiper/css';
import 'swiper/css/navigation';
import { EbookList } from 'utils/data';

export default function HomeView() {
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
        {EbookList.map((ebook) => (
          <SwiperSlide key={ebook.id} tag="li">
            <EbookCard {...ebook} />
          </SwiperSlide>
        ))}
      </Swiper>
    </S.Wrapper>
  );
}
