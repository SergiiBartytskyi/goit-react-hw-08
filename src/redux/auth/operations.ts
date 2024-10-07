import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../operationsAPI";
import { setAuthHeader, clearAuthHeader } from "../../operationsAPI";
import { RootState } from "../store";
import { IAuthResponse, ICredentials, IUser } from "./auth-types";

/*
 * POST @ /users/login
 * body: { name, email, password }
 */
export const register = createAsyncThunk<
  IAuthResponse,
  ICredentials,
  { rejectValue: string }
>("auth/register", async (credentials, thunkAPI) => {
  try {
    const response = (await axios.post("/users/signup", credentials)).data;
    setAuthHeader(response.token);
    return response;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

/*
 * POST @ /users/login
 * body: { email, password }
 */
export const logIn = createAsyncThunk<
  IAuthResponse,
  Omit<ICredentials, "name">,
  { rejectValue: string }
>("auth/login", async (credentials, thunkAPI) => {
  try {
    const response = (await axios.post("/users/login", credentials)).data;
    setAuthHeader(response.token);
    return response;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 */
export const logOut = createAsyncThunk<void, void, { rejectValue: string }>(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      await axios.post("/users/logout");
      clearAuthHeader();
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * GET @ /users/me
 * headers: Authorization: Bearer token
 */
export const refreshUser = createAsyncThunk<
  IUser,
  void,
  { rejectValue: string; state: RootState }
>("auth/refresh", async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;

  if (persistedToken === null) {
    return thunkAPI.rejectWithValue("Unable to fetch user");
  }

  try {
    setAuthHeader(persistedToken);
    const response = (await axios.get("/users/current")).data;
    return response;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
