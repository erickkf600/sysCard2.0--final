import { createFeatureSelector, Action, combineReducers } from '@ngrx/store';

import { featureKey } from '../contact.config';
import * as fromContact from './contact.reducer';
import * as fromContactListPage from './contact-list-page.reducer';
import * as fromContactDetailPage from './contact-detail-page.reducer';

export interface ContactState {
  contact: fromContact.State;
  contactListPage: fromContactListPage.State;
  contactDetailPage: fromContactDetailPage.State;
}

export function reducer(state: ContactState | undefined, action: Action) {
  return combineReducers({
    contact: fromContact.reducer,
    contactListPage: fromContactListPage.reducer,
    contactDetailPage: fromContactDetailPage.reducer
  })(state, action);
}

export const selectContactState = createFeatureSelector<ContactState>(featureKey);
