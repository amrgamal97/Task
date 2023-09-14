import { StationsService } from './../core/services/stations.service';
import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Stations } from '../shared/models/stationsList';
import { ChartComponent } from 'ng-apexcharts';
import { StationsSales } from '../shared/models/stationsSales';
import { Subject, takeUntil } from 'rxjs';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, OnDestroy {
  stationsList: Stations[] = [];
  stationsSales: StationsSales[] = [];
  activatedView: string = 'list';
  destroySubject$: Subject<void> = new Subject<void>();

  @ViewChild('chart') chart: ChartComponent;
  @ViewChild('radarChart', { static: true }) radarChartRef: ElementRef;
  public chartOptions: any;
  public radarChart: any;

  constructor(private StationsService: StationsService) {}

  switchView(periodDate: string): void {
    this.activatedView = periodDate;
  }

  ngOnInit(): void {
    this.initializeStations();
    this.initializeStationsGraph();
    this.initializeStationsSales();
    this.initializeRadarGraph();
  }

  ngOnDestroy(): void {
    this.destroySubject$.next();
    this.destroySubject$.complete();
  }

  private initializeStations(): void {
    this.StationsService.getStations()
      .pipe(takeUntil(this.destroySubject$))
      .subscribe({
        next: (data: Stations[]) => {
          this.stationsList = data;
        },
        error: (err: any) => {},
      });
  }

  private initializeStationsGraph(): void {
    this.chartOptions = {
      colors: ['#ff7f5c'],

      series: [
        {
          name: 'Station',
          data: [150, 215, 100, 250, 80],
        },
      ],
      chart: {
        type: 'bar',
        height: 250,
        // width: 300,
        id: 'chart',
        stacked: true,
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          endingShape: 'rounded',
          distributed: false,
          borderRadiusApplication: 'around  ', // "around" / "end"
          borderRadiusWhenStacked: 'all', // "all"/"last"
          columnWidth: '8%',

          borderRadius: 4,
        },
      },
      stroke: {
        width: 1,
        colors: ['#fff'],
      },
      title: {
        text: '',
      },
      xaxis: {
        categories: [
          `Station Name`,
          'Station Name',
          'Station Name',
          'Station Name',
          'Station Name',
        ],
        labels: {
          rotate: 0, // Set the rotate option to 0 degrees
          style: {
            fontSize: '12px', // Adjust the font size as needed
            fontWeight: 'bold', // Set to 'normal' to remove italic style
            colors: '#A5A5A5',
          },
          cssClass: 'custom-x-axis-label', // Add a custom CSS class
        },
      },
      yaxis: {
        min: 0, // Set the minimum value to zero
        max: 300, // Set the maximum value to 45K
        tickAmount: 5, // Number of ticks, you can adjust as needed
        labels: {
          style: {
            fontSize: '12px', // Adjust the font size as needed
            fontWeight: 'bold', // Set to 'normal' to remove italic style
            colors: ['#A5A5A5'],
          },
        },
      },
      tooltip: {
        y: {
          formatter: function (val: number) {
            return val;
          },
        },
      },

      legend: {
        show: false,
        position: 'bottom',
        horizontalAlign: 'left',
        offsetX: 0,
        fontSize: '8.5px',
        fontWeight: 700,
        labels: {
          colors: '#809FB8',
          useSeriesColors: false,
        },
        markers: {
          fillColors: ['#0DD0D0', '#D9E1E7'], // Specify the colors for the legend items
          radius: 12,
          width: 8,
          height: 8,
        },
        itemMargin: {
          horizontal: 15,
          vertical: 15,
        },
      },
    };
  }

  private initializeRadarGraph(): void {
    const radarChartConfig: any = {
      type: 'radar',
      data: {
        labels: [
          '24:00',
          '02:00',
          '04:00',
          '06:00',
          '08:00',
          '10:00',
          '12:00',
          '14:00',
          '16:00',
          '18:00',
          '20:00',
          '22:00',
        ],
        datasets: [
          {
            label: 'Series Blue',
            backgroundColor: 'rgba(0, 154, 207, 0.2)', // Adjust the color
            borderColor: 'rgba(0, 154, 207, 0.4)', // Adjust the color
            borderWidth: 2,
            fill: true,

            data: [300, 300, 442, 350, 300, 350, 400, 300, 250, 300, 400, 300],
            lineTension: 0.5,
          },
          {
            label: 'Series Green',
            backgroundColor: 'rgba(0, 203, 192, 0.2)', // Adjust the color
            borderColor: 'rgba(0, 203, 192, 0.4)', // Adjust the color
            borderWidth: 2,
            fill: true,

            data: [300, 400, 300, 250, 300, 400, 350, 200, 130, 420, 360, 320],
            lineTension: 0.5,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: false, // Remove the title
        },
        elements: {
          line: {
            borderWidth: 3,
          },
          point: {
            radius: 0,
          },
        },
        // scale: {
        //   angleLines: {
        //     display: false, // Hide the radial lines
        //   },
        //   ticks: {
        //     beginAtZero: true,
        //     min: 0,
        //     max: 120, // Set the maximum value based on your data
        //     stepSize: 20,
        //   },
        // },
        scales: {
          r: {
            // pointLabels: {
            //   display: false, // Hides the labels around the radar chart
            // },
            ticks: {
              display: false, // Hides the labels in the middel (numbers)
            },
          },
        },
        plugins: {
          // tooltip: {
          //   enabled: false, // <-- this option disables tooltips
          // },
          // toolbar: {
          //   display: false,
          // },
          legend: {
            display: false, // Hide the legend
          },
        },
      },
    };

    this.radarChart = new Chart(
      this.radarChartRef.nativeElement,
      radarChartConfig
    );
  }

  private initializeStationsSales(): void {
    this.StationsService.getStationsSales()
      .pipe(takeUntil(this.destroySubject$))
      .subscribe({
        next: (data: StationsSales[]) => {
          this.stationsSales = data;
        },
      });
  }
}
