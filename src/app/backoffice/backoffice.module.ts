import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackofficeRoutingModule } from './backoffice-routing.module';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { NavComponent } from './nav/nav.component';




@NgModule({
  declarations: [
    AdminLayoutComponent,
    SideBarComponent,
    NavComponent
    
  ],
  imports: [
    CommonModule,
    BackofficeRoutingModule
  ]
})
export class BackofficeModule { }
