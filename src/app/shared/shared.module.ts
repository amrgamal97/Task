import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from './ui-modules/primeNg-modules';
import { TotalStatisticsComponent } from './components/total-statistics/total-statistics.component';
import { MaterialModule } from './ui-modules/material-modules';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  declarations: [TotalStatisticsComponent],
  imports: [CommonModule, PrimeNgModule, MaterialModule, NgApexchartsModule],
  exports: [
    PrimeNgModule,
    MaterialModule,
    TotalStatisticsComponent,
    NgApexchartsModule,
  ],
})
export class SharedModule {}
