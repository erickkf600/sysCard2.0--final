import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ContactService } from './contact.service';
describe('ContactService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [ ContactService ]
    });
  });

  function setup() {
    const service: ContactService = TestBed.get(ContactService);
    const backend: HttpTestingController = TestBed.get(HttpTestingController);

    return { service, backend };
  }

  it('should be created', () => {
    const { service } = setup();
    expect(service).toBeTruthy();
  });

});
