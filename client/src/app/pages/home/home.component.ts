import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ReadService } from '../../services/read/read.service';
import { HttpResponse } from '../../interfaces/http.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  public products: Array<Product>;
  public renderedProducts: Array<Product>;

  constructor(private readService: ReadService) {}

  ngOnInit(): void {
    this.readProducts();
  }

  readProducts() {
    this.readService.readProducts()
    .subscribe((response: HttpResponse) => {
      this.products = response.data;
      this.renderedProducts = this.products;
      console.log(this.products);
    })
  }

  childUpdate(filter: string): Array<Product> { 
    // when the user clicks "apply filters" this method gets called
    /*
        all
        free
        discount
        linux
        windows
        iOS
        moneybackguarantee
    */
    switch(filter) {
      case "all":       
        return this.renderedProducts = this.products;

      case "free": 
        return this.renderedProducts = this.products.filter(element => element.freeOption);

      case "discount": 
        return this.renderedProducts = this.products.filter(element => element.onSaleData.onSale);
      
      case "platforms": return this.renderedProducts = this.filterByFeature(this.products, "Supported Platforms")
      
      case "support": return this.renderedProducts = this.filterByFeature(this.products, "Support")

      case "moneybackguarantee": return this.renderedProducts = this.filterByFeature(this.products, "Money Back Guarantee")
        default: 
        return this.renderedProducts = this.products;
    }
  }

  filterByFeature(products: Array<Product>, match: string): Array<Product> {
    let filtered = [];

    products.forEach(i => {
      i.features.forEach(j => {
        if(j.key === match) return filtered.push(i);
      })
    })

    return filtered;
  };
}
