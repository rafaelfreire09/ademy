import { ChangeEvent, useState } from 'react';
import * as S from './styles';

import { useAuth } from 'hooks/useAuth';

import Button from '../../shared/Button';
import { useRouter } from 'next/navigation';

export default function SignInView() {
  const auth = useAuth();
  const router = useRouter();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  const handleNameInput = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordInput = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordInput = (event: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(event.target.value);
  };

  const handleSignIn = async () => {
    if (password != confirmPassword) {
      showMessage('As senhas digitadas devem ser iguais.');
    }

    if (name && email && password && confirmPassword) {
      try {
        await auth.authenticateSignIn(name, email, password);

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
      <S.LabelCTA>Crie sua conta da Ademy</S.LabelCTA>
      <S.Input
        type="input"
        placeholder="Nome"
        value={name}
        onChange={handleNameInput}
      />
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
      <S.Input
        type="password"
        placeholder="Confirmar Senha"
        value={confirmPassword}
        onChange={handleConfirmPasswordInput}
      />
      {errorMessage && <S.Error_Message>{`${errorMessage}`}</S.Error_Message>}
      <S.ButtonSection>
        <Button
          label="Criar conta"
          width="120"
          onClick={handleSignIn}
          submit={true}
        />
      </S.ButtonSection>
    </S.Wrapper>
  );
}
