import styled from 'styled-components';

export const Wrapper = styled.div``;

export const TitleSection = styled.div`
  padding: 50px 0 50px 250px;

  font-size: 32px;
  font-weight: 700;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 9fr 3fr;
`;

export const ItemsSection = styled.div`
  width: 100%;
  padding: 10px 100px;

  display: flex;
  flex-direction: column;
  gap: 30px 0;
`;

export const ItemCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  border-top: 3px solid #e9e9e9;

  padding: 20px;
`;

export const ItemName = styled.div``;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Image = styled.div`
  width: 90px;
  height: 140px;
  position: relative;
`;

export const ItemContent = styled.div`
  padding: 0 60px;
`;

export const Title = styled.div`
  font-size: 22px;
  font-weight: 600;
`;

export const QuantitySection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    margin-bottom: 10px;
    font-weight: 700;
  }
`;

export const QuantityButtons = styled.div`
  display: flex;
  gap: 0 10px;
`;

export const SubTotalItem = styled.div`
  display: flex;
  flex-direction: column;

  gap: 20px 0;
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Price = styled.div`
  font-size: 16px;
  font-weight: 700;
`;

export const CartEmpty = styled.div`
  display: flex;
  justify-content: center;

  padding-top: 100px;
`;

export const Resume = styled.div``;

export const TotalLabel = styled.div`
  font-size: 16px;
  font-weight: 700;

  color: #6a6f73;
  margin-bottom: 10px;
`;

export const TotalPrice = styled.div`
  font-size: 32px;
  font-weight: 700;

  margin-bottom: 30px;
`;
