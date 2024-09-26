import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { logOut } from "../auth/operations";
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
      // .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, actions) => {
        state.loading = false;
        state.error = null;
        state.items = actions.payload;
      })
      // .addCase(fetchContacts.rejected, handleRejected)
      // .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, actions) => {
        state.loading = false;
        state.error = null;
        state.items.push(actions.payload);
      })
      // .addCase(addContact.rejected, handleRejected)
      // .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, actions) => {
        state.loading = false;
        state.error = null;
        const idx = state.items.findIndex(
          (contact) => contact.id === actions.payload.id
        );
        state.items.splice(idx, 1);
      })
      // .addCase(deleteContact.rejected, handleRejected)
      // .addCase(editContact.pending, handlePending)
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
      // .addCase(editContact.rejected, handleRejected)
      .addCase(logOut.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
        state.items = [];
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
