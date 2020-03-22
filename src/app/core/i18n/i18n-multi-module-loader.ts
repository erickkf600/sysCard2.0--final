import { HttpClient } from '@angular/common/http';
import { TranslateLoader } from '@ngx-translate/core';

import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import * as _ from 'lodash';

export class MultiModuleTranslateLoader implements TranslateLoader {
  constructor(
    private http: HttpClient,
    private readonly options: {
      prefix: string;
      modules: Array<string>;
    }
  ) { }

  public getTranslation(lang: string): Observable<any> {
    const { prefix, modules } = this.options;

    const requests = modules.map((moduleName) => {
      const path = [prefix, moduleName, lang].join('/') + '.json';

      return this.http.get(path);
    });

    return forkJoin(requests).pipe(
      map(response => _.reduce(response, _.extend))
    );
  }
}
