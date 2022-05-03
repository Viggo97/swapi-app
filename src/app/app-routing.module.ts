import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FilmsComponent} from "./films/films/films.component";

const routes: Routes = [
  {path: 'films', component: FilmsComponent},
  {path: '', redirectTo: 'films', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
