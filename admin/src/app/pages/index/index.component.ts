import { Component, OnInit } from '@angular/core';
import { ReadService } from '../../services/read/read.service';
import { HttpResponse } from '../../interfaces/http.interface';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  providers: [],
})
export class IndexComponent implements OnInit {
  public barChart;
  public lineChart;

  constructor(private readService: ReadService) {}

  ngOnInit(): void {
    this.readProducts();
  }

  readProducts() {
    this.barChart.resetData();

    this.readService.readProducts().subscribe((response: HttpResponse) => {
      let data = [];

      response.data.forEach((product) => {
        data.push({ label: product.label, views: product.views });
      });

      data.sort((a, b) => a.views - b.views);
      data.forEach((product) =>
        this.barChart.updateData(product.views, product.label)
      );
    });
  }
}
