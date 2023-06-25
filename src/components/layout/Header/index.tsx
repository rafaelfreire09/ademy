import { useRouter } from 'next/navigation';
import * as S from './styles';

import Image from 'next/image';

import { useAuth } from 'hooks/useAuth';

import { useAppSelector } from 'hooks/redux';
import Button from 'components/shared/Button';

export default function Header() {
  const auth = useAuth();
  const router = useRouter();

  const items = useAppSelector((state) => state.cartItems);

  const handleLogout = () => {
    auth.logout();

    router.push('/');
  };

  const handleClickOnLogo = () => {
    router.push('/');
  };

  const handleClickOnProfile = () => {
    router.push('/profile/dashboard');
  };

  const handleClickOnCart = () => {
    router.push('/cart');
  };

  const handleClickOnLogin = () => {
    router.push('/login');
  };

  const handleClickOnSignIn = () => {
    router.push('/signin');
  };

  return (
    <S.Wrapper>
      <S.Logo onClick={handleClickOnLogo}>ADEMY</S.Logo>
      {auth.accessToken ? (
        <S.AuthSection>
          <S.Profile onClick={handleClickOnProfile} />
          <S.Cart onClick={handleClickOnCart}>
            {items.length != 0 && (
              <S.CartAmount>
                <span>{items.length}</span>
              </S.CartAmount>
            )}

            <Image
              src="/assets/icons/cart.png"
              width={24}
              height={24}
              alt="Cart icon from Icon8"
            />
          </S.Cart>
          <Button
            label="Sair"
            onClick={handleLogout}
            colorType="red"
            width="50"
            fontSize="12"
          ></Button>
        </S.AuthSection>
      ) : (
        <S.ButtonsSection>
          <Button
            label="Fazer login"
            onClick={handleClickOnLogin}
            width="100"
            fontSize="12"
          />
          <Button
            label="Cadastre-se"
            onClick={handleClickOnSignIn}
            width="110"
            fontSize="12"
          />
        </S.ButtonsSection>
      )}
    </S.Wrapper>
  );
}
