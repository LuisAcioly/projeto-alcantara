import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SatellitesRoutingModule } from './satellites-routing.module';
import { SatellitesListComponent } from './satellites-list/satellites-list.component';
import { DashboardModule } from '../dashboard.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SatellitesFormComponent } from './satellites-form/satellites-form.component';


@NgModule({
  declarations: [
    SatellitesListComponent,
    SatellitesFormComponent
  ],
  imports: [
    CommonModule,
    SatellitesRoutingModule,
    DashboardModule,
    ReactiveFormsModule
  ]
})
export class SatellitesModule { }
