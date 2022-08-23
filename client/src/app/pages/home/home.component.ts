import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models';
import { ProductService } from 'src/app/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public products: Product[] = [];

  constructor(private readService: ProductService) {}

  ngOnInit() {
    this.readService.getProducts().subscribe((response) => {
      this.products = response.data;
    });
  }
}
