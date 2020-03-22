import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  ContactListPageComponent,
  ContactCreatePageComponent,
  ContactDetailPageComponent
} from './containers';

const routes: Routes = [
  {
    path: '',
    component: ContactListPageComponent
  },
  {
    path: 'create',
    component: ContactCreatePageComponent
  },
  {
    path: ':id',
    component: ContactDetailPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
