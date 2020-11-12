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

  childUpdate(filter: string) { 
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
    this.renderedProducts = this.filter(filter);
    console.log(this.renderedProducts.length)
  }


  filter(filter): Array<Product> {
    switch(filter) {
      case "all": return this.products;

      case "free": return this.products.filter(element => element.freeOption);
      case "discount": return this.products.filter(element => element.onSaleData.onSale);

      case "windows": return this.filterByValue("Windows 7+");
      case "ios": return this.filterByValue("iOS");
      case "android": return this.filterByValue("Android");
      case "linux": return this.filterByValue("Linux");

      case "support": return this.filterByKey("Support");
      case "moneybackguarantee": return this.filterByKey("Money Back Guarantee");

      default: return this.products;
    }
  }


  filterByKey(filter): Array<Product> {
    let products: Array<Product> = [];

    this.products.forEach(element => {
      element.features.forEach((i) =>  { 
        if(i.key === filter) return products.push(element); 
      });
    });

   return products;
  }

  filterByValue(filter: string): Array<Product> {
    let products: Array<Product> = [];

     this.products.forEach(element => {
      element.features.filter(i => {
        if(i.value.includes(filter)) return products.push(element);
      });
    });

    return products;
  }
}
