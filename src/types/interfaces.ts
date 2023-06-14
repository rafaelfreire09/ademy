import { UserToken } from "./types";

export interface IAuthContext extends UserToken {
  authenticateLogin: (email: string, password: string) => Promise<void>;
  authenticateSignIn: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}
