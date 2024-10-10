import { IContact } from "../contacts/contacts-types";

export interface IModalState {
  open: boolean;
  editingContact: IContact | null;
}
