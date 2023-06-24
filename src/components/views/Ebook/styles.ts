import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  padding: 50px 150px;
`;

export const Image = styled.div`
  width: 246px;
  height: 352px;
  position: relative;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  padding: 0 60px;
`;

export const Title = styled.div`
  font-size: 22px;
  font-weight: 600;
`;

export const Author = styled.div`
  font-size: 17px;
  font-weight: 400;

  color: #595959;
  margin-top: 5px;
`;

export const Description = styled.div`
  font-size: 14px;

  margin-top: 35px;
`;

export const CallToAction = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Price = styled.div`
  font-size: 15px;
  font-weight: 600;

  margin-bottom: 15px;
`;
