import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmsRoutingModule } from './films-routing.module';
import { HttpClientModule } from "@angular/common/http";

import { AngularMaterialModule} from "../angular-material/angular-material.module";
import { FilmsComponent } from './films/films.component';


@NgModule({
  declarations: [
    FilmsComponent
  ],
  imports: [
    CommonModule,
    FilmsRoutingModule,
    AngularMaterialModule,
    HttpClientModule,
  ]
})
export class FilmsModule { }