import { NgModule } from '@angular/core';

import { AngularMaterialModule} from "../angular-material/angular-material.module";

import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    AngularMaterialModule
  ]
})
export class LayoutModule { }
