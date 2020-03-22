import { TestBed } from '@angular/core/testing';
import { Store, MemoizedSelector } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { cold } from 'jasmine-marbles';

import { AuthGuard } from './auth.guard';
import { AuthState } from '../../auth/reducers';
import { AuthSelectors } from '../../auth/selectors';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let store: MockStore<AuthState>;
  let isAuthenticated: MemoizedSelector<AuthState, boolean>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        provideMockStore()
      ],
    });

    store = TestBed.get(Store);
    guard = TestBed.get(AuthGuard);

    isAuthenticated = store.overrideSelector(AuthSelectors.selectIsAuthenticated, false);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should return false if the user state is not authenticated', () => {
    const expected = cold('(a|)', { a: false });

    expect(guard.canActivate()).toBeObservable(expected);
  });

  it('should return true if the user state is authenticated', () => {
    const expected = cold('(a|)', { a: true });
    isAuthenticated.setResult(true);

    expect(guard.canActivate()).toBeObservable(expected);
  });

});
