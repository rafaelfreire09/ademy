import { UserToken } from "./types";

export interface IAuthContext extends UserToken {
  authenticate: (email: string, password: string) => Promise<void>;
  logout: () => void;
}
