import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  activatedPeriodPage: string = 'today';
  dateStart: Date | undefined;
  dateEnd: Date | undefined;

  switchPeriodPage(periodDate: string): void {
    this.activatedPeriodPage = periodDate;
  }
}
