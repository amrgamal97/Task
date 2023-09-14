import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MainComponent } from './main.component';
import { StationSalesComponent } from './station-sales/station-sales.component';
import { StationCardComponent } from './station-card/station-card.component';

@NgModule({
  declarations: [MainComponent, StationSalesComponent, StationCardComponent],
  imports: [CommonModule, MainRoutingModule, SharedModule],
})
export class MainModule {}
