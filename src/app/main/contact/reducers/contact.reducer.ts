import { createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { ContactModel } from '../models';
import { ContactActions } from '../actions';

export interface State extends EntityState<ContactModel> {
}

export function sortByUsername(a: ContactModel, b: ContactModel): number {
  if (!a.username || !b.username) {
    return 0;
  }

  return a.username.localeCompare(b.username);
}

export const adapter: EntityAdapter<ContactModel> = createEntityAdapter<ContactModel>({
  selectId: (contact: ContactModel) => contact.id,
  sortComparer: sortByUsername,
});

export const initialState: State = adapter.getInitialState({});

export const reducer = createReducer(
  initialState,

  on(
    ContactActions.findContactSuccess,
    (state, { contacts }) => {
      return adapter.addMany(contacts, state);
    }
  ),

  on(
    ContactActions.findContactByIdSuccess,
    (state, { contact }) => {
      return adapter.addOne(contact, state);
    }
  )
);
