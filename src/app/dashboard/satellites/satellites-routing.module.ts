import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SatelliteResolverGuard } from './guards/satellite-resolver.guard';
import { SatellitesFormComponent } from './satellites-form/satellites-form.component';
import { SatellitesListComponent } from './satellites-list/satellites-list.component';

const routes: Routes = [
  {path: '', component: SatellitesListComponent},
  {path: 'novo', component: SatellitesFormComponent, resolve: {satellite: SatelliteResolverGuard}},
  {path: 'editar/:id', component: SatellitesFormComponent,  resolve: {satellite: SatelliteResolverGuard}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SatellitesRoutingModule { }
