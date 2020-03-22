import { createReducer, on } from '@ngrx/store';

import { ContactActions } from '../actions';

export interface State {
  loading: boolean;
  saving: boolean;
}

export const initialState: State = {
  loading: false,
  saving: false
};

export const reducer = createReducer(
  initialState,

  on(
    ContactActions.findContactById,
    (state) => ({ ...state, loading: true })
  ),

  on(
    ContactActions.updateContact,
    (state) => ({ ...state, saving: true })
  ),

  on(
    ContactActions.findContactByIdSuccess,
    ContactActions.findContactByIdFailure,
    (state) => ({ ...state, loading: false })
  ),

  on(
    ContactActions.updateContactSuccess,
    ContactActions.updateContactFailure,
    (state) => ({ ...state, saving: false })
  )
);
