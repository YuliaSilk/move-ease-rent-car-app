// import { createSelector } from "@reduxjs/toolkit";

// export const selectContacts = (store) => store.contacts.contacts;
// export const selectFilter = (store) => store.filter.value;
export const selectAdverts = state => state.adverts.adverts;
export const selectFilter = state => state.filter.value;
export const selectIsLoading = state => state.adverts.isLoading;
export const selectError = state => state.adverts.error;

// export const selectVisibleContacts = createSelector (
//     [selectAdverts, selectFilter], (adverts, filter) => {
// return adverts.filter(advert => advert.name.toLowerCase().includes(filter.toLowerCase()))
//     }
// )