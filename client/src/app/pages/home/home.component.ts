import { Component, OnInit } from '@angular/core';
import { Product } from './products';
import { ReadService } from '../../services/read/read.service';
import { HttpResponse } from '../../interfaces/http.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  public products: Array<Product>;

  constructor(private readService: ReadService) {}

  ngOnInit(): void {
    this.readProducts();
  }

  readProducts() {
    this.readService.readProducts()
    .subscribe((response: HttpResponse) => {
      this.products = response.data;
    })
  }
}
