import styled from 'styled-components';
import mainColors from 'styles/mainColors';

export const Wrapper = styled.div`
  .swiper {
    padding: 0 50px;

    .swiper-button-prev {
      color: ${mainColors.black.normal};
    }

    .swiper-button-next {
      color: ${mainColors.black.normal};
    }
  }
`;

export const TitleSection = styled.div`
  padding: 50px 0 50px 250px;

  font-size: 1.9rem;
  font-weight: 700;
`;

export const SwipperSection = styled.div`
  padding: 30px 100px;
`;
