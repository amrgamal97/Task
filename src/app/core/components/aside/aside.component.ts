import { Component } from '@angular/core';
import { Aside } from 'src/app/shared/models/aside';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss'],
})
export class AsideComponent {
  asideList: Aside[] = [];
  constructor() {}
  ngOnInit(): void {
    this.initializeAsideItems();
  }

  private initializeAsideItems() {
    this.asideList = [
      {
        logo: 'assets/icon/control-room.svg',
        route: '',
      },
      {
        logo: 'assets/icon/dashboard.svg',
        route: '',
      },
      {
        logo: 'assets/icon/elements.svg',
        route: '',
      },
      {
        logo: 'assets/icon/settings.svg',
        route: '',
      },
      {
        logo: 'assets/icon/notifications.svg',
        route: '',
      },
      {
        logo: 'assets/icon/logout.svg',
        route: '',
      },
    ];
  }
}
