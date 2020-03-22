import { createSelector } from '@ngrx/store';

import { selectContactState } from '../reducers';

export const selectContactDetailPageState = createSelector(
  selectContactState,
  state => state.contactDetailPage
);

export const selectContactDetailPageLoading = createSelector(
  selectContactDetailPageState,
  (contactDetailPageState) => contactDetailPageState.loading
);

export const selectContactDetailPageSaving = createSelector(
  selectContactDetailPageState,
  (contactDetailPageState) => contactDetailPageState.saving
);
