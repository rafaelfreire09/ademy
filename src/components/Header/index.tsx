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

  return (
    <S.Wrapper>
      <S.Label>ADEMY</S.Label>
      {auth.accessToken ? (
        <S.AuthSection>
          <S.Profile />
          <Button label="Logout" onClick={handleLogout} colorType='red'></Button>
        </S.AuthSection>
      ) : (
        <Button label="Login" href="/auth"></Button>
      )}
    </S.Wrapper>
  );
}
