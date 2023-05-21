import * as S from './styles';

import Image from 'next/image';
import Button from 'components/Button';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { useRouter } from 'next/navigation';
import { formatPrice } from 'utils/general';
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from 'redux/cartSlice';

export type CartViewProps = {};

export default function CartView({}: CartViewProps) {
  const router = useRouter();

  const cart = useAppSelector((state) => state.cartItems);
  const dispatch = useAppDispatch();

  const handleClickBuy = () => {
    router.push('/payment');
  };

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price,
      0
    );
  };

  return (
    <S.Wrapper>
      <S.TitleSection>Carrinho de compras</S.TitleSection>
      <S.Content>
        <S.ItemsSection>
          {cart.length ? (
            cart.map((item) => (
              <S.ItemCard>
                <S.ImageWrapper>
                  <S.Image>
                    <Image src={item.image} fill alt={item.title} />
                  </S.Image>
                </S.ImageWrapper>
                <S.ItemContent>
                  <S.ItemName>{item.title}</S.ItemName>
                </S.ItemContent>
                <S.QuantitySection>
                  <span>{item.quantity}</span>
                  <S.QuantityButtons>
                    <Button
                      width="25"
                      height="25"
                      colorType="default"
                      iconSrc="/assets/icons/minus.png"
                      onClick={() => {
                        dispatch(decrementQuantity(item));
                      }}
                    />
                    <Button
                      width="25"
                      height="25"
                      colorType="default"
                      iconSrc="/assets/icons/add.png"
                      onClick={() => {
                        dispatch(incrementQuantity(item));
                      }}
                    />
                  </S.QuantityButtons>
                </S.QuantitySection>
                <S.SubTotalItem>
                  <S.Price>{formatPrice(item.price * item.quantity)}</S.Price>
                  <Button
                    width="85"
                    height="50"
                    label="Remover"
                    colorType="red"
                    onClick={() => {
                      dispatch(removeFromCart(item));
                    }}
                  />
                </S.SubTotalItem>
              </S.ItemCard>
            ))
          ) : (
            <S.CartEmpty>Seu carrinho está vazio</S.CartEmpty>
          )}
        </S.ItemsSection>

        <S.Resume>
          <S.TotalLabel>Total:</S.TotalLabel>
          <S.TotalPrice>{formatPrice(getTotalPrice())}</S.TotalPrice>
          <Button
            width="85"
            height="50"
            label="Comprar"
            colorType="green"
            onClick={handleClickBuy}
          />
        </S.Resume>
      </S.Content>
    </S.Wrapper>
  );
}
