import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../operationsAPI";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = (await axios.get("/contacts")).data;
      return response;
      // console.log(response);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkAPI) => {
    try {
      const response = (await axios.post("/contacts", contact)).data;
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const response = (await axios.delete(`/contacts/${contactId}`)).data;
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// export const clearContactsBackend = createAsyncThunk(
//   "contacts/clearAll",
//   async (_, thunkAPI) => {
//     try {
//       const response = (await axios.delete("/contacts")).data;
//       return response;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

export const editContact = createAsyncThunk(
  "contacts/editContact",
  async (contactId, thunkAPI) => {
    try {
      const response = (await axios.patch(`/contacts/${contactId}`)).data;
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
