import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanetDetailComponent } from './planet-detail/planet-detail.component';

const routes: Routes = [
  {
    path: ':id',
    component: PlanetDetailComponent,
  },
  {
    path: '',
    redirectTo: '/films',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanetsRoutingModule {}
