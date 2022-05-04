import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarshipDetailsComponent } from './starship-details/starship-details.component';

const routes: Routes = [
  {
    path: ':id',
    component: StarshipDetailsComponent,
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
export class StarshipsRoutingModule {}
