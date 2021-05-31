import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'foguetes', loadChildren: () => import('./rockets/rockets.module').then(m => m.RocketsModule)},
  { path: 'satelites', loadChildren: () => import('./satellites/satellites.module').then(m => m.SatellitesModule)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
