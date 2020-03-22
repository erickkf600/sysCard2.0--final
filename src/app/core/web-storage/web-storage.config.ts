import { InjectionToken } from '@angular/core';

export const WEB_STORAGE_CONFIGURATION = new InjectionToken<WebStorageConfiguration>
  ('Web storage configuration token');

export interface WebStorageConfiguration {
  /**
   * Determines the key prefix. (Default: 'web_storage')
   */
  prefix?: string;
  /**
   * Determines if null | 'null' values should be stored. (Default: true)
   */
  allowNull?: boolean;
}

export const defaultWebStorageConfig: WebStorageConfiguration = {
  prefix: 'web_storage',
  allowNull: true
};
