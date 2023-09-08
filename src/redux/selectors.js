import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contacts;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilter = state => state.filter.filter;

export const selectUserAuthentication = state => state.auth.authenticated;
export const selectUserData = state => state.auth.userData;
export const selectUserIsLoading = state => state.auth.isLoading;
export const selectUserError = state => state.auth.error;
export const selectUserToken = state => state.auth.token;


export const selectFilterContacts = createSelector([
    selectContacts,
    selectFilter
], (contacts, filter) => {
    return contacts.items.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  )
})