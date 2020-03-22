import { createSelector } from '@ngrx/store';

import { selectContactState } from '../reducers';
import * as fromContact from '../reducers/contact.reducer';

export const selectContactEntitiesState = createSelector(
  selectContactState,
  state => state.contact
);

export const {
  selectIds: selectContactIds,
  selectEntities: selectContactEntities,
  selectAll: selectAllContacts,
  selectTotal: selectTotalContacts,
} = fromContact.adapter.getSelectors(selectContactEntitiesState);

export const selectContactById = (id: string) => createSelector(
  selectContactEntities,
  (contactEntities) => contactEntities[id]
);
