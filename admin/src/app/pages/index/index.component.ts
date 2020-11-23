import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { LineChart, BarChart } from './charts.data';
import { ReadService } from '../../services/read/read.service';
import { HttpResponse } from '../../interfaces/http.interface';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  providers: [DatePipe]
})

export class IndexComponent implements OnInit {
  public barChart;
  public lineChart;

  constructor(
    private readService: ReadService, 
    private socket: Socket, 
    private datePipe: DatePipe) {
      this.barChart = new BarChart(this.datePipe);
      this.lineChart = new LineChart(this.datePipe);
    }

  ngOnInit(): void {
    this.socket.on('history', (data) => {
      this.lineChart.resetData();
      data.forEach(dataPoint => this.lineChart.updateData(dataPoint, ''));
    });

    this.socket.on('connections', (data) => this.lineChart.updateData(data, ''));

    this.readProducts();
    this.socket.emit("get-connections");
  }

  readProducts() {
    this.barChart.resetData();

    this.readService.readProducts().subscribe((response: HttpResponse) => {
      let data = [];

      response.data.forEach(product => {
        data.push({ label: product.label, views: product.views })
      });

      data.sort((a, b) => a.views - b.views);
      data.forEach(product => this.barChart.updateData(product.views, product.label));
    });
  }

  refresh(chart: string) {
    switch(chart) {
      case "line":  return this.socket.emit("get-connections");
      case "bar": return this.readProducts();
    };
  }

}
