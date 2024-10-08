import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IContact } from "../contacts/contacts-types";
import { IModalState } from "./modal-types";

const initialState: IModalState = {
  open: false,
  editingContact: null,
};
const slice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<IContact | null>) => {
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

export default slice.reducer;
