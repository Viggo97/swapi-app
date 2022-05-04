import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanetsRoutingModule } from './planets-routing.module';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { PlanetDetailsComponent } from './planet-details/planet-details.component';

@NgModule({
  declarations: [PlanetDetailsComponent],
  imports: [CommonModule, PlanetsRoutingModule, AngularMaterialModule],
})
export class PlanetsModule {}
