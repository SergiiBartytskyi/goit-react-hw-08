import { createSelector } from "@reduxjs/toolkit";
import { selectQueryFilter } from "../filters/selectors";
import { RootState } from "../store";
import { IContact } from "./contacts-types";

export const selectContacts = (state: RootState): IContact[] =>
  state.contacts.items;

export const selectContactsLoading = (state: RootState): boolean =>
  state.contacts.loading;

export const selectContactsError = (state: RootState): string | null =>
  state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectQueryFilter],
  (contacts: IContact[], query): IContact[] => {
    return contacts.filter(
      (contact) =>
        contact.name?.toLowerCase().includes(query.toLowerCase()) ||
        contact.number?.includes(query)
    );
  }
);
