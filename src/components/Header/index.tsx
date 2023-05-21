import { useRouter } from 'next/navigation';
import * as S from './styles';

import Image from 'next/image';

import { useAuth } from 'hooks/useAuth';

import Button from '../Button';
import { useAppSelector } from 'hooks/redux';

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
            label="Logout"
            onClick={handleLogout}
            colorType="red"
          ></Button>
        </S.AuthSection>
      ) : (
        <Button label="Login" href="/auth" />
      )}
    </S.Wrapper>
  );
}
