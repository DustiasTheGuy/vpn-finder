import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import * as moment from 'moment';
import { Charts } from './charts.data';
import { ReadService } from '../../services/read/read.service';
import { HttpResponse } from '../../interfaces/http.interface';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})

export class IndexComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false
  };
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = false;

  public barChartData: ChartDataSets[] = [
    { data: [], label: 'Views' },
  ];

  public barChartColors: Color[] = [
    { // grey
      backgroundColor: 'rgba(66, 135, 245, .35)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
    }
  ]

  public lineChartData: ChartDataSets[] = [
    { data: [], label: 'Website Visitors' },
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
  ]

  constructor(private readService: ReadService, private socket: Socket) {}

  ngOnInit(): void {
    
    this.socket.on('connections', (data) => {
      this.lineChartData[0].data.push(data);
      this.lineChartLabels.push(``)
    });

    this.readProducts();
    this.socket.emit("get-connections", {});
  }

  readProducts() {
    this.barChartLabels = [];
    this.barChartData[0].data = [];

    this.readService.readProducts().subscribe((response: HttpResponse) => {
      let data = [];

      response.data.forEach(product => {
        data.push({ label: product.label, views: product.views })
      });

      data.sort((a, b) => a.views - b.views);
      data.forEach(product => {
        this.barChartLabels.push(product.label);
        this.barChartData[0].data.push(product.views);
      });
    });
  }

  refresh(chart: string) {
    switch(chart) {
      case "line":  this.socket.emit("get-connections", {});
      break;
      case "bar": this.readProducts();
      break;

    }
  }

}
