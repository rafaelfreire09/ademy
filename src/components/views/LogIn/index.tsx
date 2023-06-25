import * as S from './styles';

import { ChangeEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

import { useAuth } from 'hooks/useAuth';

import Button from 'components/shared/Button';

export default function LogInView() {
  const auth = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordInput = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    if (email && password) {
      try {
        await auth.authenticateLogin(email, password);

        router.push('/');
      } catch (error) {
        console.log('Erro!!');
      }
    } else {
      showMessage('Todos os campos são obrigatórios');
    }
  };

  function showMessage(message: string) {
    function removeMessage() {
      setErrorMessage('');
    }

    setErrorMessage(message);

    setTimeout(removeMessage, 5000);
  }

  if (auth.accessToken) {
    router.push('/');
  }

  return (
    <S.Wrapper>
      <S.LabelCTA>Faça login na sua conta da Ademy</S.LabelCTA>
      <S.Input
        type="input"
        placeholder="Email"
        value={email}
        onChange={handleEmailInput}
      />
      <S.Input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={handlePasswordInput}
      />
      {errorMessage && <S.Error_Message>{`${errorMessage}`}</S.Error_Message>}
      <S.ButtonSection>
        <Button
          label="Fazer Login"
          width="130"
          onClick={handleLogin}
          submit={true}
        />
      </S.ButtonSection>
    </S.Wrapper>
  );
}
