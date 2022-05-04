import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarshipDetailsComponent } from './starship-details/starship-details.component';
import { StarshipsRoutingModule } from '../starships/starships-routing.module';
import { AngularMaterialModule } from '../angular-material/angular-material.module';

@NgModule({
  declarations: [StarshipDetailsComponent],
  imports: [CommonModule, StarshipsRoutingModule, AngularMaterialModule],
})
export class StarshipsModule {}
