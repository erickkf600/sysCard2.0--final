import { Injectable, Inject } from '@angular/core';

import { WEB_STORAGE_CONFIGURATION, WebStorageConfiguration } from './web-storage.config';

@Injectable()
export class LocalStorageService {
  private readonly prefix: string;

  constructor(
    @Inject(WEB_STORAGE_CONFIGURATION) config: WebStorageConfiguration
  ) {
    this.prefix = config.prefix;
  }

  get(key: string): any {
    const result = localStorage.getItem(`${this.prefix}_${key}`);
    if (result === undefined || result == null) {
      return null;
    }

    try {
      return JSON.parse(result);
    } catch {
      return result;
    }
  }

  set(key: string, value: any) {
    localStorage.setItem(`${this.prefix}_${key}`, JSON.stringify(value));
  }

  remove(key: string) {
    return localStorage.removeItem(`${this.prefix}_${key}`);
  }

  clear() {
    return localStorage.clear();
  }

}
