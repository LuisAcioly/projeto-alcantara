import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RocketFormComponent } from './rocket-form/rocket-form.component';
import { RocketListComponent } from './rocket-list/rocket-list.component';

const routes: Routes = [
  {path: '', component: RocketListComponent},
  {path: 'novo', component: RocketFormComponent},
  {path: ':id', component: RocketFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RocketsRoutingModule { }
