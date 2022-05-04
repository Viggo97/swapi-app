import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDetailsComponent } from './character-details/character-details.component';

const routes: Routes = [
  {
    path: ':id',
    component: CharacterDetailsComponent,
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
export class CharactersRoutingModule {}
