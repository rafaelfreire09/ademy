import { ChangeEvent, useState } from 'react';
import * as S from './styles';

import { useAuth } from 'hooks/useAuth';

import Button from '../Button';
import { useRouter } from 'next/navigation';

export default function AuthView() {
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
        await auth.authenticate(email, password);

        router.push('/');
      } catch (error) {
        console.log('Erro!!');
      }
    } else {
      console.log('Email and password must be not empty');
    }
  };

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
      <S.ButtonSection></S.ButtonSection>
      <Button
        label="Fazer Login"
        width="100"
        onClick={handleLogin}
        submit={true}
      />
    </S.Wrapper>
  );
}
