import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RocketsRoutingModule } from './rockets-routing.module';
import { RocketListComponent } from './rocket-list/rocket-list.component';
import { DashboardModule } from '../dashboard.module';
import { RocketFormComponent } from './rocket-form/rocket-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RocketListComponent,
    RocketFormComponent,
  ],
  imports: [
    CommonModule,
    RocketsRoutingModule,
    DashboardModule,
    ReactiveFormsModule
  ]
})
export class RocketsModule { }
