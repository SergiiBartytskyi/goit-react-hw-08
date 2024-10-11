import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/operationsAPI";
import { IContact } from "./contacts-types";
import { RootState } from "../store";

export const fetchContacts = createAsyncThunk<
  IContact[],
  void,
  { rejectValue: string }
>("contacts/fetchAll", async (_, thunkAPI) => {
  const state = thunkAPI.getState() as RootState;
  const token = state.auth.token;

  if (!token) {
    return thunkAPI.rejectWithValue("User is not authenticated");
  }

  try {
    const response = (await axios.get("/contacts")).data;
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue((error as Error).message);
  }
});

export const addContact = createAsyncThunk<
  IContact,
  Omit<IContact, "id">,
  { rejectValue: string }
>("contacts/addContact", async (contact, thunkAPI) => {
  const state = thunkAPI.getState() as RootState;
  const token = state.auth.token;

  if (!token) {
    return thunkAPI.rejectWithValue("User is not authenticated");
  }

  try {
    const response = (await axios.post("/contacts", contact)).data;
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue((error as Error).message);
  }
});

export const deleteContact = createAsyncThunk<
  IContact,
  string,
  { rejectValue: string }
>("contacts/deleteContact", async (contactId, thunkAPI) => {
  const state = thunkAPI.getState() as RootState;
  const token = state.auth.token;

  if (!token) {
    return thunkAPI.rejectWithValue("User is not authenticated");
  }

  try {
    const response = (await axios.delete(`/contacts/${contactId}`)).data;
    console.log(response);
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue((error as Error).message);
  }
});

export const editContact = createAsyncThunk<
  IContact,
  IContact,
  { rejectValue: string }
>("contacts/editContact", async (contact, thunkAPI) => {
  const state = thunkAPI.getState() as RootState;
  const token = state.auth.token;

  if (!token) {
    return thunkAPI.rejectWithValue("User is not authenticated");
  }

  try {
    const { id, ...updatedFields } = contact;
    const response = (await axios.patch(`/contacts/${id}`, updatedFields)).data;
    console.log(response);
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue((error as Error).message);
  }
});
