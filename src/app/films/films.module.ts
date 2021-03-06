import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmsRoutingModule } from './films-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { FilmsComponent } from './films/films.component';
import { FilmDetailsComponent } from './film-details/film-details.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FilmsComponent, FilmDetailsComponent],
  imports: [
    CommonModule,
    FilmsRoutingModule,
    AngularMaterialModule,
    HttpClientModule,
    RouterModule,
  ],
})
export class FilmsModule {}
