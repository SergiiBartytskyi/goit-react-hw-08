import { createSlice, isAnyOf, PayloadAction } from "@reduxjs/toolkit";
import { logOut } from "../auth/operations";
import {
  fetchContacts,
  addContact,
  deleteContact,
  editContact,
} from "./operations";
import { IContact, IContactState } from "./contacts-types";

const initialState: IContactState = {
  items: [],
  loading: false,
  error: null,
};

const handlePending = (state: IContactState) => {
  state.loading = true;
};

const handleRejected = (
  state: IContactState,
  action: PayloadAction<string | undefined>
) => {
  state.loading = false;
  state.error = action.payload ?? "Unknown error";
};

const slice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchContacts.fulfilled,
        (state, action: PayloadAction<IContact[]>) => {
          state.loading = false;
          state.error = null;
          state.items = action.payload;
        }
      )
      .addCase(
        addContact.fulfilled,
        (state, action: PayloadAction<IContact>) => {
          state.loading = false;
          state.error = null;
          state.items.push(action.payload);
        }
      )
      .addCase(
        deleteContact.fulfilled,
        (state, action: PayloadAction<IContact>) => {
          state.loading = false;
          state.error = null;
          const idx = state.items.findIndex(
            (contact) => contact.id === action.payload.id
          );
          state.items.splice(idx, 1);
        }
      )
      .addCase(
        editContact.fulfilled,
        (state, action: PayloadAction<IContact>) => {
          state.loading = false;
          state.error = null;
          const idx = state.items.findIndex(
            (contact) => contact.id === action.payload.id
          );
          if (idx !== -1) {
            state.items[idx] = action.payload;
          }
        }
      )
      .addCase(logOut.fulfilled, () => {
        return initialState;
      })
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          addContact.pending,
          deleteContact.pending,
          editContact.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addContact.rejected,
          deleteContact.rejected,
          editContact.rejected
        ),
        handleRejected
      );
  },
});

export default slice.reducer;
