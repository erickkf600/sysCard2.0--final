import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ContactModel, CreateContactModel, UpdateContactModel } from '../models';

@Injectable()
export class ContactService {
  constructor(private http: HttpClient) { }

  public find(): Observable<any> {
    return this.http.get(`api/contacts`);
  }

  public findById(id: string): Observable<ContactModel> {
    return this.http.get<ContactModel>(`api/contacts/${id}`);
  }

  public create(contact: CreateContactModel): Observable<any> {
    return this.http.post(`api/contacts/`, contact);
  }

  public update(id: string, update: UpdateContactModel): Observable<any> {
    return this.http.put(`api/contacts/${id}`, update);
  }

  public delete(id: string): Observable<any> {
    return this.http.delete(`api/contacts/${id}`);
  }
}
