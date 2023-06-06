import * as S from './styles';

import Image from 'next/image';
import Button from 'components/Button';
import { useAppSelector } from 'hooks/redux';
import { formatPrice } from 'utils/general';

export type PaymentViewProps = {};

export default function PaymentView({}: PaymentViewProps) {
  const cart = useAppSelector((state) => state.cartItems);

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price,
      0
    );
  };

  return (
    <S.Wrapper>
      <S.TitleSection>Finalizar compra</S.TitleSection>
      <S.Content>
        <S.PaymentMethodSection>
          <S.PaymentMethodLabel>Forma de Pagamento</S.PaymentMethodLabel>
          <S.PaymentMethodType>
            <S.PaymentMethodTypeInfo>
              <S.PaymentMethodTypeInfoSection>
                <Image
                  src="/assets/icons/credit-card.svg"
                  width={50}
                  height={50}
                  alt="Credit card icon"
                />
                <S.PaymentMethodTypeLabel>
                  Cartão de crédito
                </S.PaymentMethodTypeLabel>
              </S.PaymentMethodTypeInfoSection>
              <div>
                <Image
                  src="/assets/icons/mastercard.svg"
                  width={50}
                  height={50}
                  alt="Credit card icon"
                />
                <Image
                  src="/assets/icons/visa.svg"
                  width={50}
                  height={50}
                  alt="Credit card icon"
                />
              </div>
            </S.PaymentMethodTypeInfo>

            <S.CreditCard>
              <S.CreditCardSection>
                <S.CreditCardInput>
                  <S.InputLabel>Titular do cartão</S.InputLabel>
                  <S.Cardholder type="input" placeholder="Titular do cartão" />
                </S.CreditCardInput>
                <S.CreditCardInput>
                  <S.InputLabel>CPF/CNPJ</S.InputLabel>
                  <S.CPFOrCNPJ type="input" placeholder="CPF/CNPJ" />
                </S.CreditCardInput>
              </S.CreditCardSection>
              <S.CreditCardSection>
                <S.CreditCardInput>
                  <S.InputLabel>Número do cartão</S.InputLabel>
                  <S.CardNumber
                    type="input"
                    placeholder="1234 5678 9012 3456"
                  />
                </S.CreditCardInput>
              </S.CreditCardSection>
              <S.CreditCardSection>
                <S.CreditCardInput>
                  <S.InputLabel>Prazo</S.InputLabel>
                  <S.Term type="input" placeholder="MM/AA" />
                </S.CreditCardInput>
                <S.CreditCardInput>
                  <S.InputLabel>CVC/CVV</S.InputLabel>
                  <S.CVC type="input" placeholder="CVC/CVV" />
                </S.CreditCardInput>
              </S.CreditCardSection>
            </S.CreditCard>
          </S.PaymentMethodType>
        </S.PaymentMethodSection>
        <S.Resume>
          <S.ResumeLabel>Resumo</S.ResumeLabel>
          <S.TotalSection>
            <S.TotalLabel>Total: </S.TotalLabel>
            <S.TotalPrice>{formatPrice(getTotalPrice())}</S.TotalPrice>
          </S.TotalSection>
          <S.ButtonSection>
            <Button
              width="170"
              height="50"
              label="Finalizar a compra"
              colorType="green"
            />
          </S.ButtonSection>
        </S.Resume>
      </S.Content>
    </S.Wrapper>
  );
}