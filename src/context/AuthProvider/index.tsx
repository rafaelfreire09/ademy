import { createContext, useEffect, useState } from 'react';
import { useAppDispatch } from 'hooks/redux';

import { IAuthContext } from 'types/interfaces';
import { UserToken } from 'types/types';

import { setUserID } from 'redux/userSlice';

import { CreateUser, LoginRequest } from 'services/auth';
import { getLocalStorage, setLocalStorage } from 'utils/localStorage';

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [token, setToken] = useState<UserToken | null>();
  const dispatch = useAppDispatch();

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
    dispatch(setUserID(response.User.UserID));
  }

  async function authenticateSignIn(
    name: string,
    email: string,
    password: string
  ) {
    const response = await CreateUser(name, email, password);

    const payload = {
      //   refreshToken: response.tokens.refresh,
      accessToken: response.Token,
    };

    setToken(payload);
    setLocalStorage('token', payload);
    dispatch(setUserID(response.User.UserID));
  }

  function logout() {
    setToken(null);
    setLocalStorage('token', null);
    dispatch(setUserID(0));
  }

  return (
    <AuthContext.Provider
      value={{ ...token, authenticateLogin, authenticateSignIn, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
