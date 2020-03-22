import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { Language } from '@app/core/i18n';
import { AppState } from '@app/core/store';
import { appSettingsAction, selectCurrentLanguage } from '@app/core/app-settings';
import { AuthActions } from '@app/auth';

@Component({
  selector: 'toolbar',
  templateUrl: './admin-toolbar.component.html',
  styleUrls: ['./admin-toolbar.component.scss']
})
export class AdminToolbarComponent implements OnInit {
  @Input() sideMenu: boolean;
  @Output() toogleSideMenu = new EventEmitter();
  selectedLanguage$ = this.store.pipe(select(selectCurrentLanguage));

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
  }

  toggleSideMenu(){
    this.toogleSideMenu.emit(!this.sideMenu)
  }
  onLanguageSelect(language: Language) {
    this.store.dispatch(appSettingsAction.changeLanguage({ language }));
  }

  onLogoutClicked(): void {
    this.store.dispatch(AuthActions.logoutConfirmation());
  }


}
