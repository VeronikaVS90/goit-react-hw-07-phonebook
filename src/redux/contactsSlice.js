import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './api';
import { STATUS } from 'redux/status';
const { IDLE, PENDING, FULFILLED, REJECTED } = STATUS;

const handlePending = state => {
  state.status = PENDING;
};
const handleFulfilled = state => {
  state.error = null;
  if (state.contacts.length === 0) {
    state.status = IDLE;
    return;
  }
  state.status = FULFILLED;
};

const handleRejected = (state, action) => {
  state.error = action.payload;
  state.status = REJECTED;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [], status: IDLE, error: '' },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        handlePending(state);
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts = action.payload;
        handleFulfilled(state);
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        handleRejected(state, action);
      })
      .addCase(addContact.pending, (state) => {
        handlePending(state);
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.push(action.payload);
        handleFulfilled(state);
      })
      .addCase(addContact.rejected, (state, action) => {
        handleRejected(state, action);
      })
      .addCase(deleteContact.pending, (state) => {
        handlePending(state);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts = state.contacts.filter(
          ({ id }) => id !== action.payload.id
        );
        handleFulfilled(state);
      })
      .addCase(deleteContact.rejected, (state, action) => {
        handleRejected(state, action);
      });
  },
});

export const contactsReducer = contactsSlice.reducer;