import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;

  text-decoration: none;

  cursor: pointer;

  &:hover {
    opacity: 85%;
  }
`;

export const Image = styled.div`
  width: 140px;
  height: 220px;
  position: relative;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Title = styled.div`
  font-size: 15px;
  font-weight: 500;

  margin-top: 15px;
`;

export const Author = styled.div`
  font-size: 13px;
  font-weight: 400;

  color: #595959;
  margin-top: 5px;
`;

export const Price = styled.div`
  font-size: 15px;
  font-weight: 600;

  margin-top: 15px;
`;
