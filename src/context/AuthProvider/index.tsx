import { createContext, useEffect, useState } from 'react';

import { IAuthContext } from 'types/interfaces';
import { UserToken } from 'types/types';

import { LoginRequest } from 'services/auth';
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

  async function authenticate(email: string, password: string) {
    const response = await LoginRequest(email, password);

    const payload = {
    //   refreshToken: response.tokens.refresh,
      accessToken: response.Token,
    };

    setToken(payload);
    setLocalStorage('token', payload);
  }

  function logout() {
    setToken(null);
    setLocalStorage('token', null);
  }

  return (
    <AuthContext.Provider value={{ ...token, authenticate, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
