import { Component, Input } from '@angular/core';
import { Stations } from 'src/app/shared/models/stationsList';

@Component({
  selector: 'app-station-card',
  templateUrl: './station-card.component.html',
  styleUrls: ['./station-card.component.scss'],
})
export class StationCardComponent {
  @Input() stations: Stations;
}
