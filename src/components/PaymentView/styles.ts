import styled from 'styled-components';

export const Wrapper = styled.div``;

export const TitleSection = styled.div`
  padding: 50px 0 50px 250px;

  font-size: 32px;
  font-weight: 700;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 8fr 4fr;
`;

export const PaymentMethodSection = styled.div`
  padding: 0 100px 0 200px;
`;

export const PaymentMethodLabel = styled.div`
  font-size: 16px;
  font-weight: 600;
`;

export const PaymentMethodType = styled.div`
  border: 2px solid #e9e9e9;
  border-radius: 8px;

  margin-top: 25px;
`;

export const PaymentMethodTypeInfo = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #e9e9e9;

  padding: 5px 20px;
`;

export const PaymentMethodTypeInfoSection = styled.div`
  display: flex;
  align-items: center;
`;

export const PaymentMethodTypeLabel = styled.div`
  font-weight: 700;
  font-size: 15px;
  margin-left: 15px;
`;

export const CreditCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const CreditCardSection = styled.div`
  display: flex;
`;

export const CreditCardInput = styled.div`
  width: 100%;
  margin: 5px 8px;

  input {
    border: 1px solid #1c1d1f;
    border-radius: 3px;

    height: 45px;
    width: 100%;
    padding: 0 0.7rem;
  }
`;

export const InputLabel = styled.div`
  margin: 12px 0;

  font-size: 12px;
  font-weight: 600;
`;

export const Cardholder = styled.input``;

export const CPFOrCNPJ = styled.input``;

export const CardNumber = styled.input``;

export const Term = styled.input``;

export const CVC = styled.input``;

export const Resume = styled.div`
  max-width: 300px;
`;

export const ResumeLabel = styled.div`
  font-size: 24px;
  font-weight: 700;

  margin-bottom: 10px;
`;

export const TotalSection = styled.div`
  border-top: 1px solid #e9e9e9;

  display: flex;
  justify-content: space-between;

  margin-top: 25px;
  padding-top: 15px;
`;

export const TotalLabel = styled.div`
  font-size: 16px;
  font-weight: 700;
`;

export const TotalPrice = styled.div`
  font-size: 16px;
  font-weight: 700;
`;

export const ButtonSection = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 50px;
`;
