import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';

import {
  WebStorageConfiguration,
  WEB_STORAGE_CONFIGURATION,
  defaultWebStorageConfig
} from './web-storage.config';
import { LocalStorageService } from './local-storage.service';

@NgModule({})
export class WebStorageModule {
  static forRoot(config?: WebStorageConfiguration): ModuleWithProviders {
    const webStorageConfig = {
      ...defaultWebStorageConfig,
      ...config
    };

    return {
      ngModule: WebStorageModule,
      providers: [
        {
          provide: WEB_STORAGE_CONFIGURATION,
          useValue: webStorageConfig
        },
        LocalStorageService
      ]
    };
  }

  constructor(@Optional() @SkipSelf() parentModule: WebStorageModule) {
    if (parentModule) {
      throw new Error('WebStorageModule is already loaded. Import it in the AppModule only');
    }
  }
}
