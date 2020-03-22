import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { CONTAINER_COMPONENTS } from './containers';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule.forChild(),
    DashboardRoutingModule
  ],
  declarations: [
    CONTAINER_COMPONENTS
  ]
})
export class DashboardModule { }
