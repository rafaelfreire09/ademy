import styled from 'styled-components';
import mainColors from 'styles/mainColors';

export const Wrapper = styled.div`
  padding: 0 100px;

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
  margin: 25px 0;

  font-size: 1.7rem;
  font-weight: 700;
`;
