import { createContext, useEffect, useState } from 'react';

import { IAuthContext } from 'types/interfaces';
import { UserToken } from 'types/types';

import { CreateUser, LoginRequest } from 'services/auth';
import { getLocalStorage, setLocalStorage } from 'utils/localStorage';

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [token, setToken] = useState<UserToken | null>();

  useEffect(() => {
    const tokenCaught = getLocalStorage('token');

    if (tokenCaught) {
      setToken(tokenCaught);
    }
  }, []);

  async function authenticateLogin(email: string, password: string) {
    const response = await LoginRequest(email, password);

    const payload = {
    //   refreshToken: response.tokens.refresh,
      accessToken: response.Token,
    };

    setToken(payload);
    setLocalStorage('token', payload);
    setLocalStorage('email', {
      email: email
    });
  }

  async function authenticateSignIn(name: string, email: string, password: string) {
    const response = await CreateUser(name, email, password);

    const payload = {
    //   refreshToken: response.tokens.refresh,
      accessToken: response.Token,
    };

    setToken(payload);
    setLocalStorage('token', payload);
    setLocalStorage('email', email);
  }

  function logout() {
    setToken(null);
    setLocalStorage('token', null);
  }

  return (
    <AuthContext.Provider value={{ ...token, authenticateLogin, authenticateSignIn, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
