import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product';
import { Product } from 'src/app/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit {
  public products: Product[] = [];

  constructor(private router: Router, private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe((res) => {
      if (res.success) {
        this.products = res.data;
      } else {
        window.alert('Could not load products');
      }
    });
  }

  navigate(id: string) {
    this.router.navigate(['/update'], {
      queryParams: { id },
    });
  }
}
