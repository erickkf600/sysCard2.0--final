import { createAction, props } from '@ngrx/store';

import { Language } from '../../i18n';

const changeLanguage = createAction(
  '[Settings] Change Language',
  props<{ language: Language }>()
);

const changeTheme = createAction(
  '[Settings] Change Theme',
  props<{ theme: string }>()
);

export const appSettingsAction = {
  changeLanguage,
  changeTheme
};
