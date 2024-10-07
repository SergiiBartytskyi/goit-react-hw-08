export interface IUser {
  name: string | null;
  email: string | null;
}

export interface IAuthState {
  user: IUser;
  token: string | null;
  isLoggedIn: boolean;
  isRefreshing: boolean;
}

export interface ICredentials {
  name?: string;
  email: string;
  password: string;
}

export interface IAuthResponse {
  user: IUser;
  token: string;
}
