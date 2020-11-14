import { Component, OnInit } from '@angular/core';
import { ReadService } from '../../services/read/read.service';
import { UpdateService } from '../../services/update/update.service';
import { HttpResponse } from '../../interfaces/http.interface';

declare interface OnSaleData {
  onSale: boolean;
  discount: number;
}

declare interface Product {
  imageURL: string;
  label: string;
  description: string;
  link: string;
  freeOption: boolean;
  priority: boolean;
  new: boolean;
  active: boolean;
  moneyBack: boolean;
  onSaleData: OnSaleData;
  features: Array<String>;
};

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})

export class IndexComponent implements OnInit {
  public products: Array<Product>;
  public inFocus: Product;
  public newFeature: string;

  constructor(
    private updateService: UpdateService,
    private readService: ReadService) { }

  ngOnInit(): void {
    this.readProducts(() => this.inFocus = this.products[0]);
  }


  readProducts(callback: Function) {
    this.readService.readProducts()
    .subscribe((response: HttpResponse) => {
      if(response.success) {
        response.data.forEach(element => element["new"] = false);
        this.products = response.data;
        console.log(this.products)
        callback();
      }
    });
  }

  setInfocus(product) { this.inFocus = product; }

  addValue(obj) {
    obj.value.push(obj.temp);
    obj.temp = undefined;
    return;
  }

  newProduct() {
    this.products.push({
      imageURL: "/assets/images/products/placeholder.png",
      label: "Best VPN Provider",
      description: "A little description",
      link: `/assets/images/products/<${this.products.length}>.jpg`,
      freeOption: false,
      priority: false,
      new: true,
      active: true,
      moneyBack: false,
      onSaleData: { onSale: false, discount: 0 },
      features: []
    });
  }

  submit() {
    this.updateService.updateProduct(this.inFocus)
    .subscribe((response: HttpResponse) => {
      if(response.success) this.readProducts(() => console.log(response));
    });
  }

  create() {

  }
}
