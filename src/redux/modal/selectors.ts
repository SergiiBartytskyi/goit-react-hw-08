import { IContact } from "../contacts/contacts-types";
import { RootState } from "../store";

export const selectModalOpen = (state: RootState): boolean => state.modal.open;
export const selectEditingContact = (state: RootState) =>
  state.modal.editingContact;
