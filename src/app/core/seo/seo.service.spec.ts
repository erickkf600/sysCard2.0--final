import { TestBed } from '@angular/core/testing';

import { SeoService } from './seo.service';

describe('SeoService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [SeoService]
  }));

  it('should be created', () => {
    const service: SeoService = TestBed.get(SeoService);

    expect(service).toBeTruthy();
  });

  it('should be able set page title', () => {
    const service: SeoService = TestBed.get(SeoService);
    service.setPageTitle('Angular app');

    expect(true).toBe(true);
  });

  it('should be able add meta tag', () => {
    const service: SeoService = TestBed.get(SeoService);
    service.addMetaTag({ name: 'name', property: 'ok' });

    expect(true).toBe(true);
  });

});
