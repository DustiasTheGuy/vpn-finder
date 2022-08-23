import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ReadService } from '../../services/read/read.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public products: Array<Product> = [];

  constructor(private readService: ReadService) {}

  ngOnInit(): void {
    this.readProducts();
  }

  readProducts() {
    this.readService.readProducts().subscribe((response) => {
      console.log(response);

      this.products = response.data;
    });
  }
}
