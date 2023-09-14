import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { Stations } from 'src/app/shared/models/stationsList';
import { StationsSales } from 'src/app/shared/models/stationsSales';

@Injectable({
  providedIn: 'root',
})
export class StationsService {
  getStations(): Observable<Stations[]> {
    const stationsList: Stations[] = [
      {
        name: ' STATION NAME DUMMY',
        totalSales: 662721,
        totalValue: 500,
        compressionState: 'Compression',
        maxTransaction: 20,
        maxTransactionDate: '8-1-2021 | 10:16 PM',
        totalTransaction: 5161,
        availability: true,
      },
      {
        name: ' STATION NAME DUMMY',
        totalSales: 662721,
        totalValue: 500,
        compressionState: 'Compression',
        maxTransaction: 20,
        maxTransactionDate: '8-1-2021 | 10:16 PM',
        totalTransaction: 5161,
        availability: true,
      },
      {
        name: ' STATION NAME DUMMY',
        totalSales: 662721,
        totalValue: 500,
        compressionState: 'Compression',
        maxTransaction: 20,
        maxTransactionDate: '8-1-2021 | 10:16 PM',
        totalTransaction: 5161,
        availability: false,
      },
      {
        name: ' STATION NAME DUMMY',
        totalSales: 662721,
        totalValue: 500,
        compressionState: 'Compression',
        maxTransaction: 20,
        maxTransactionDate: '8-1-2021 | 10:16 PM',
        totalTransaction: 5161,
        availability: true,
      },
    ];
    return of(stationsList).pipe(delay(500));
  }

  getStationsSales(): Observable<StationsSales[]> {
    const stationsSales: StationsSales[] = [
      {
        name: ' STATION NAME DUMMY',
        value: '62721m³',
        progress: 35,
      },
      {
        name: ' STATION NAME DUMMY',
        value: '62721m³',
        progress: 35,
      },
      {
        name: ' STATION NAME DUMMY',
        value: 'NM',
        progress: null,
      },
    ];
    return of(stationsSales).pipe(delay(500));
  }
}
