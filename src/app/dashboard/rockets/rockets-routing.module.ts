import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RocketResolverGuard } from './guards/rocket-resolver.guard';
import { RocketFormComponent } from './rocket-form/rocket-form.component';
import { RocketListComponent } from './rocket-list/rocket-list.component';

const routes: Routes = [
  {path: '', component: RocketListComponent},
  {path: 'novo', component: RocketFormComponent, resolve: {rocket: RocketResolverGuard}},
  {path: 'editar/:id', component: RocketFormComponent,  resolve: {rocket: RocketResolverGuard}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RocketsRoutingModule { }
