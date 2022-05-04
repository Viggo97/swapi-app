import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanetDetailsComponent } from './planet-details/planet-details.component';

const routes: Routes = [
  {
    path: ':id',
    component: PlanetDetailsComponent,
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
