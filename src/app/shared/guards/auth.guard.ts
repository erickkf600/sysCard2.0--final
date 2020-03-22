import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap, distinctUntilChanged, take } from 'rxjs/operators';

import { AuthState } from '../../auth/reducers';
import { AuthSelectors } from '../../auth/selectors';
import { AuthActions } from '../../auth/actions';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

  private isAuthenticated$: Observable<boolean>;

  constructor(private store: Store<AuthState>) {

    this.isAuthenticated$ = this.store.pipe(
      select(AuthSelectors.selectIsAuthenticated),
      distinctUntilChanged(),
      tap(isAuthenticated => {
        if (!isAuthenticated) {
          this.store.dispatch(AuthActions.loginRedirect());
        }
      }),
      take(1)
    );
  }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this.isAuthenticated$;
  }

  canActivateChild(): boolean | Observable<boolean> | Promise<boolean> {
    return this.isAuthenticated$;
  }

}
