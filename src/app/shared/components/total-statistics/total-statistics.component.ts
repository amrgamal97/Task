import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-total-statistics',
  templateUrl: './total-statistics.component.html',
  styleUrls: ['./total-statistics.component.scss'],
})
export class TotalStatisticsComponent {
  @Input() totalValue: string | null;
  @Input() totalType: string | null;
  @Input() currency: string | null;
  @Input() incrementalValue: string | null;
  @Input() arrowDirection: string;
  @Input() coloredIncremntal: string;
}
