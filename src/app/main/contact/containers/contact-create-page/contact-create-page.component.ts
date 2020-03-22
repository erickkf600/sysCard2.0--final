import { Component, OnInit, ViewChild } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { Observable } from 'rxjs';

import { CreateContactModel } from '../../models';
import { ContactState } from '../../reducers';
import { ContactActions } from '../../actions';
import { ContactFormComponent } from '../../components';
import { ContactDetailPageSelectors } from '../../selectors';

@Component({
  selector: 'app-contact-create-page',
  templateUrl: './contact-create-page.component.html',
  styleUrls: ['./contact-create-page.component.scss']
})
export class ContactCreatePageComponent implements OnInit {
  @ViewChild(ContactFormComponent, { static: true }) contactForm: ContactFormComponent;

  pending$: Observable<boolean>;

  constructor(
    private store: Store<ContactState>
  ) {
    this.store.pipe(select(ContactDetailPageSelectors.selectContactDetailPageSaving));
  }

  ngOnInit() {
  }

  onCreate(): void {
    const contact: CreateContactModel = this.contactForm.form.value;

    this.store.dispatch(ContactActions.createContact({ contact }));
  }

}
