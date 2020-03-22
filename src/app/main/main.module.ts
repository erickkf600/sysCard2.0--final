import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  // MatSidenavModule,
  MatToolbarModule,
  MatButtonModule,
  MatMenuModule,
  MatIconModule
  // MatListModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule } from '@ngx-translate/core';

import { MainRoutingModule } from './main-routing.module';
import { MainLayoutComponent, AdminToolbarComponent, AdminSidebarComponent } from './layout';
const MAT_MODULES = [
  // MatSidenavModule,
  MatToolbarModule,
  MatButtonModule,
  MatMenuModule,
  MatIconModule
  // MatListModule
];

@NgModule({
  imports: [
    CommonModule,
    MAT_MODULES,
    FlexLayoutModule,
    TranslateModule.forChild(),
    MainRoutingModule
  ],
  declarations: [
    MainLayoutComponent,
    AdminToolbarComponent,
    AdminSidebarComponent
  ]
})
export class MainModule { }
