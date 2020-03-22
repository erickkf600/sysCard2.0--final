import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { i18nMultiModuleLoaderFactory } from '@app/core/i18n';
import { AuthModule, AuthConfiguration } from '@app/auth';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '@app/env';

const authConfig: AuthConfiguration = {
  loginURL: 'login',
  loginApiURL: 'auth/login',
  headerName: 'Authorization',
  skipWhenExpired: true,
  whitelistedDomains: [
    environment.apiBaseUrl
  ],
  blacklistedRoutes: [
    'auth/login'
  ]
};
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: i18nMultiModuleLoaderFactory,
        deps: [HttpClient]
      }
    }),

    AppRoutingModule,
    CoreModule.forRoot(),
    AuthModule.forRoot(authConfig)
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
