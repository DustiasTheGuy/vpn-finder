import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { DatePipe } from '@angular/common';

declare interface DataPoint {
    length: number;
    time: Label;
}

export class LineChart {

    constructor(private datePipe: DatePipe) {}

    public lineChartData: ChartDataSets[] = [
        { data: [], label: `Website Visitors - Last updated ${this.datePipe.transform(Date.now(), 'short')}` },
    ];
    
    public lineChartLabels: Label[] = [];
    public lineChartOptions: (ChartOptions & { annotation: any }) = {
        responsive: true,
        maintainAspectRatio: false,
        annotation: null,
        scales : {
          yAxes: [ { ticks: { stepSize: 1 } } ]
        }
    };
    
    public lineChartLegend = true;
    public lineChartType: ChartType = 'line';
      
    public lineChartColors: Color[] = [
        { // grey
          backgroundColor: 'rgba(148,159,177,0.4)',
          borderColor: 'rgba(148,159,177,1)',
          pointBackgroundColor: 'rgba(148,159,177,1)',
          pointBorderColor: '#fff',
        }
    ];

    public updateData(dataPoint: DataPoint) {
        this.lineChartData[0].data.push(dataPoint.length);
        this.lineChartLabels.push(this.datePipe.transform(dataPoint.time, 'shortTime'));
        this.lineChartData[0].label = `Website Visitors - Last updated ${this.datePipe.transform(Date.now(), 'short')}`;
    }

    public resetData() {
        this.lineChartData[0].data = [];
        this.lineChartLabels = [];
        this.lineChartData[0].label = `Website Visitors - Last updated ${this.datePipe.transform(Date.now(), 'short')}`;
    }
}

export class BarChart {

    constructor(private datePipe: DatePipe) {}

    public barChartOptions: ChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales : {
          yAxes: [ { ticks: { stepSize: 1 } } ]
        }
    };

    public barChartLabels: Label[] = [];
    public barChartType: ChartType = 'bar';
    public barChartLegend = true;
    
    public barChartData: ChartDataSets[] = [
        { data: [], label: `Product Views - Last Updated ${this.datePipe.transform(Date.now(), 'short')}`}
    ];
    
    public barChartColors: Color[] = [
        { // grey
          backgroundColor: 'rgba(66, 135, 245, .35)',
          borderColor: 'rgba(77,83,96,1)',
          pointBackgroundColor: 'rgba(77,83,96,1)',
          pointBorderColor: '#fff',
        }
    ]
    
    public updateData(length, label) {
        this.barChartData[0].data.push(length);
        this.barChartLabels.push(label);
        this.barChartData[0].label = `Product Views - Last Updated ${this.datePipe.transform(Date.now(), 'short')}`;
    }

    public resetData() {
        this.barChartData[0].data = [];
        this.barChartLabels = [];
        this.barChartData[0].label = `Product Views - Last Updated ${this.datePipe.transform(Date.now(), 'short')}`;
    }
}