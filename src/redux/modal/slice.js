import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "modal",
  initialState: {
    open: false,
    editingContact: null,
  },
  reducers: {
    openModal: (state, action) => {
      state.open = true;
      state.editingContact = action.payload || null;
    },
    closeModal: (state) => {
      state.open = false;
      state.editingContact = null;
    },
  },
});

export const { openModal, closeModal } = slice.actions;

export const selectModalOpen = (state) => state.modal.open;
export const selectEditingContact = (state) => state.modal.editingContact;

export default slice.reducer;
