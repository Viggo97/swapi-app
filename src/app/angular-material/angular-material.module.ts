import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [],
  exports: [
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MatDividerModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatTableModule,
  ],
})
export class AngularMaterialModule {}
