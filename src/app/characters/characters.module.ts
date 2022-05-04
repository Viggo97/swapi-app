import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';

@NgModule({
  declarations: [CharacterDetailsComponent],
  imports: [CommonModule, CharactersRoutingModule, AngularMaterialModule],
})
export class CharactersModule {}
