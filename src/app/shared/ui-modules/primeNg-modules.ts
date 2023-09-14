import { NgModule } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { ChartModule } from 'primeng/chart';

const PRIMENG_MODULES: any = [CalendarModule, ChartModule];

@NgModule({
  declarations: [],
  providers: [],
  exports: [...PRIMENG_MODULES],
})
export class PrimeNgModule {}
