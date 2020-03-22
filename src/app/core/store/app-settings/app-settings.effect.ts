import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { createEffect } from '@ngrx/effects';
import { TranslateService } from '@ngx-translate/core';
import { distinctUntilChanged, tap } from 'rxjs/operators';

import { AppState } from '../reducer';
import { appSettingsSelector } from './app-settings.selector';

@Injectable()
export class AppSettingsEffects {

  setLanguage$ = createEffect(
    () =>
      this.store.pipe(
        select(appSettingsSelector.selectCurrentLanguage),
        distinctUntilChanged(),
        tap(language => this.translateService.use(language))
      ),
    { dispatch: false }
  );

  constructor(
    private store: Store<AppState>,
    private translateService: TranslateService
  ) { }

}
