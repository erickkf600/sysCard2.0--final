import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, exhaustMap, tap } from 'rxjs/operators';

import { NotificationService } from '@app/shared/notification';
import { ContactActions } from '../actions';
import { ContactService } from '../services';

@Injectable()
export class ContactEffect {

  findContact$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ContactActions.findContact),
      map(action => action),
      exhaustMap(() =>
        this.contactService.find().pipe(
          map((contacts) => ContactActions.findContactSuccess({ contacts })),
          catchError(error => of(ContactActions.findContactFailure({ error })))
        )
      )
    )
  );

  findContactById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ContactActions.findContactById),
      map(action => action.id),
      exhaustMap((id: string) =>
        this.contactService.findById(id).pipe(
          map((contact) => ContactActions.findContactByIdSuccess({ contact })),
          catchError(error => of(ContactActions.findContactByIdFailure({ error })))
        )
      )
    )
  );

  createContact$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ContactActions.createContact),
      map(action => action.contact),
      exhaustMap((contact) =>
        this.contactService.create(contact).pipe(
          map((res) => ContactActions.createContactSuccess({ contact: res })),
          catchError(error => of(ContactActions.createContactFailure({ error })))
        )
      )
    )
  );

  updateContact$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ContactActions.updateContact),
      exhaustMap(({ id, contact }) =>
        this.contactService.update(id, contact).pipe(
          map((res) => ContactActions.updateContactSuccess({ contact: res })),
          catchError(error => of(ContactActions.updateContactFailure({ error })))
        )
      )
    )
  );

  onUpdateContactSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ContactActions.updateContactSuccess),
      tap(() => {
        this.notify.show({ message: 'Update contact success', type: 'success' });
      })
    ),
    { dispatch: false }
  );

  deleteContact$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ContactActions.deleteContact),
      map(action => action.id),
      exhaustMap((id: string) =>
        this.contactService.delete(id).pipe(
          map(() => ContactActions.deleteContactSuccess({ id })),
          catchError(error => of(ContactActions.deleteContactFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private contactService: ContactService,
    private notify: NotificationService
  ) { }
}
