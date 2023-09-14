import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';

const MATERIAL_MODULES: any = [
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  MatProgressBarModule,
];

@NgModule({
  declarations: [],
  providers: [],
  exports: [...MATERIAL_MODULES],
})
export class MaterialModule {}
