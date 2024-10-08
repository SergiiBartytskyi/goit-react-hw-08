import { RootState } from "../store";
import { IUser } from "./auth-types";

export const selectIsLoggedIn = (state: RootState): boolean =>
  state.auth.isLoggedIn;

export const selectUser = (state: RootState): IUser => state.auth.user;

export const selectIsRefreshing = (state: RootState): boolean =>
  state.auth.isRefreshing;
