import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [],
  exports: [
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MatDividerModule,
    MatListModule,
  ],
})
export class AngularMaterialModule {}
