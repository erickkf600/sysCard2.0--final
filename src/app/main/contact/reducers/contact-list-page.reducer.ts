import { createReducer, on } from '@ngrx/store';

import { ContactActions } from '../actions';

export interface State {
  pending: boolean;
}

export const initialState: State = {
  pending: false
};

export const reducer = createReducer(
  initialState,

  on(
    ContactActions.findContact,
    (state) => ({ ...state, pending: true })
  ),

  on(
    ContactActions.findContactSuccess,
    ContactActions.findContactFailure,
    (state) => ({ ...state, pending: false })
  )
);
