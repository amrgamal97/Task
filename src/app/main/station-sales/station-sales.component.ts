import { Component, Input } from '@angular/core';
import { StationsSales } from 'src/app/shared/models/stationsSales';

@Component({
  selector: 'app-station-sales',
  templateUrl: './station-sales.component.html',
  styleUrls: ['./station-sales.component.scss'],
})
export class StationSalesComponent {
  @Input() stations: StationsSales;
}
