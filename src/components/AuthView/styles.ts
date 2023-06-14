import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 85vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LabelCTA = styled.div`
  color: #000000;
  margin: 0 0 2rem 0;
`;

export const Input = styled.input`
  font-size: 15px;
  font-weight: 500;
  color: #000000;

  line-height: 1.2;

  border: 1px solid #1c1d1f;
  border-radius: 15px;

  width: 280px;
  height: 45px;
  padding: 0 1rem;
  margin: 0 0 1rem 0;
`;

export const Error_Message = styled.div`
  font-family: Raleway, sans-serif;
  font-size: 13px;
  font-weight: 600;
  text-align: center;
  color: #ff2b2b;

  margin: 0.3rem 0 0 0;
`;

export const ButtonSection = styled.div`
  margin: 1.8rem 0 0 0;
`;