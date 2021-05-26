import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { SideBarComponent } from './side-bar/side-bar.component';


@NgModule({
  declarations: [
    HomeComponent,
    SideBarComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  exports: [SideBarComponent]
})
export class DashboardModule { }
