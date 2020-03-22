import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { appConfig } from '@app/config';
import { MultiModuleTranslateLoader } from './i18n-multi-module-loader';

export function i18nMultiModuleLoaderFactory(http: HttpClient) {
  return new MultiModuleTranslateLoader(http, {
    prefix: appConfig.i18n.prefix,
    modules: appConfig.i18n.modules
  });
}

export function i18nLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, `${appConfig.i18n.prefix}/assets/i18n/general/`, '.json');
}
