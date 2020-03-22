import { createFeatureSelector, Action, combineReducers } from '@ngrx/store';

import { authFeatureKey } from '../auth.config';
import * as fromAuth from './auth.reducer';
import * as fromLoginPage from './login-page.reducer';

export interface AuthState {
  status: fromAuth.State;
  loginPage: fromLoginPage.State;
}

export function authReducer(state: AuthState | undefined, action: Action) {
  return combineReducers({
    [fromAuth.statusFeatureKey]: fromAuth.reducer,
    [fromLoginPage.loginPageFeatureKey]: fromLoginPage.reducer,
  })(state, action);
}

export const selectAuthState = createFeatureSelector<AuthState>(
  authFeatureKey
);
