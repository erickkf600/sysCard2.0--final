import { createSelector } from '@ngrx/store';

import { selectContactState } from '../reducers';

export const selectContactListPageState = createSelector(
  selectContactState,
  state => state.contactListPage
);

export const selectContactListPagePending = createSelector(
  selectContactListPageState,
  (contactListPageState) => contactListPageState.pending
);
