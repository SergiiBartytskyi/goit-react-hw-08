import { createSlice, createSelector } from "@reduxjs/toolkit";
import { selectQueryFilter } from "../filters/slice";
import {
  fetchContacts,
  addContact,
  deleteContact,
  editContact,
} from "./operations";

const handlePending = (state) => {
  state.loading = true;
};

const handleRejected = (state, actions) => {
  state.loading = false;
  state.error = actions.payload;
};

const slice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, actions) => {
        state.loading = false;
        state.error = null;
        state.items = actions.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, actions) => {
        state.loading = false;
        state.error = null;
        state.items.push(actions.payload);
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, actions) => {
        state.loading = false;
        state.error = null;
        const idx = state.items.findIndex(
          (contact) => contact.id === actions.payload.id
        );
        state.items.splice(idx, 1);
      })
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(editContact.pending, handlePending)
      .addCase(editContact.fulfilled, (state, actions) => {
        state.loading = false;
        state.error = null;
        const idx = state.items.findIndex(
          (contact) => contact.id === actions.payload.id
        );
        if (idx !== -1) {
          state.items[idx] = actions.payload;
        }
      })
      .addCase(editContact.rejected, handleRejected);
  },
});

export const selectContacts = (state) => state.contacts.items;

export const selectContactsLoading = (state) => state.contacts.loading;

export const selectContactsError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectQueryFilter],
  (contacts, query) => {
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(query.toLowerCase()) ||
        contact.number.includes(query)
    );
  }
);

export default slice.reducer;
