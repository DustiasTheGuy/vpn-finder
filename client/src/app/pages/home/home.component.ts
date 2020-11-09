import { Component, OnInit } from '@angular/core';
import { Products, Product } from './products';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  public products: Array<Product>;
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  constructor() {
    this.products = new Products().products;
  }

  ngOnInit(): void {
  }




}
