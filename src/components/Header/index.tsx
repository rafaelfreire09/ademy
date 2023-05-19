import { useRouter } from 'next/router';
import * as S from './styles';

import { useAuth } from 'hooks/useAuth';

import Button from '../Button';

export default function Header() {
  const auth = useAuth();
  const router = useRouter();

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

  return (
    <S.Wrapper>
      <S.Logo onClick={handleClickOnLogo}>ADEMY</S.Logo>
      {auth.accessToken ? (
        <S.AuthSection>
          <S.Profile onClick={handleClickOnProfile} />
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
