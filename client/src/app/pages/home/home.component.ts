import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ReadService } from '../../services/read/read.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public products: Array<Product> = [];
  public renderedProducts: Array<Product> = [];

  constructor(private readService: ReadService) {}

  ngOnInit(): void {
    this.readProducts();
  }

  readProducts() {
    this.readService.readProducts().subscribe((response) => {
      console.log(response);

      this.products = response.data;
      this.renderedProducts = response.data;
    });
  }

  childUpdate(filter: string) {
    this.renderedProducts = this.filter(filter);
  }

  filter(filter: string) {
    switch (filter) {
      case 'all':
        return this.products;
      case 'free':
        return this.products.filter((element) => element.freeOption);
      case 'discount':
        return this.products.filter((element) => element.onSaleData.onSale);
      case 'recommended':
        return this.products.filter((element) => element.priority);
      case 'moneybackguarantee':
        return this.products.filter((element) => element.moneyBack);
      case 'windows':
        return this.products;
      case 'ios':
        return this.products;
      case 'android':
        return this.products;
      case 'linux':
        return this.products;
      case 'support':
        return this.products;
      default:
        return this.products;
    }
  }
}
