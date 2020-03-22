import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { BehaviorSubject } from 'rxjs';

@Injectable()
export class NetworkService {

  private newworkStatus: BehaviorSubject<boolean>;

  public get status() {
    return this.newworkStatus;
  }

  constructor(@Inject(PLATFORM_ID) platformId: string) {

    if (isPlatformBrowser(platformId)) {
      this.newworkStatus = new BehaviorSubject<boolean>(navigator.onLine);
      window.addEventListener('online', () => {
        this.newworkStatus.next(true);
      });

      window.addEventListener('offline', () => {
        this.newworkStatus.next(false);
      });
    }
  }
}
