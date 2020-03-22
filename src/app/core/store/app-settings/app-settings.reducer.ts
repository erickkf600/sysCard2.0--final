import { createReducer, Action, on } from '@ngrx/store';

import { Language } from '../../i18n';
import { appSettingsAction } from './app-settings.action';

export interface AppSettingsState {
  language: Language;
  theme: string;
}

const initialState: AppSettingsState = {
  language: 'pt-br',
  theme: 'DEFAULT-THEME'
};

const reducer = createReducer(
  initialState,
  on(
    appSettingsAction.changeLanguage,
    (state, { language }) => ({ ...state, language })
  ),
);

export function appSettingsReducer(
  state: AppSettingsState | undefined,
  action: Action
) {
  return reducer(state, action);
}
