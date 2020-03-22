import { createAction, props } from '@ngrx/store';

import { HttpError } from '@app/core/exception';
import { ContactModel, CreateContactModel, UpdateContactModel } from '../models';

export const findContact = createAction(
  '[Contact] Find contact',
  props<{ query: any }>()
);

export const findContactSuccess = createAction(
  '[Contact] Find contact success',
  props<{ contacts: Array<ContactModel> }>()
);

export const findContactFailure = createAction(
  '[Contact] Find contact failure',
  props<{ error: HttpError }>()
);

export const findContactById = createAction(
  '[Contact] Find contact by id',
  props<{ id: string }>()
);

export const findContactByIdSuccess = createAction(
  '[Contact] Find contact by id success',
  props<{ contact: ContactModel }>()
);

export const findContactByIdFailure = createAction(
  '[Contact] Find contact by id failure',
  props<{ error: HttpError }>()
);

export const createContact = createAction(
  '[Contact] Create contact',
  props<{ contact: CreateContactModel }>()
);

export const createContactSuccess = createAction(
  '[Contact] Create contact success',
  props<{ contact: ContactModel }>()
);

export const createContactFailure = createAction(
  '[Contact] Create contact failure',
  props<{ error: HttpError }>()
);

export const updateContact = createAction(
  '[Contact] Update contact',
  props<{ id: string; contact: UpdateContactModel }>()
);

export const updateContactSuccess = createAction(
  '[Contact] Update contact success',
  props<{ contact: ContactModel }>()
);

export const updateContactFailure = createAction(
  '[Contact] Update contact failure',
  props<{ error: HttpError }>()
);

export const deleteContact = createAction(
  '[Contact] Delete contact',
  props<{ id: string }>()
);

export const deleteContactSuccess = createAction(
  '[Contact] Delete contact success',
  props<{ id: string }>()
);

export const deleteContactFailure = createAction(
  '[Contact] Delete contact failure',
  props<{ error: HttpError }>()
);
