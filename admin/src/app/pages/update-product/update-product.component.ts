import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product';
import { Product } from 'src/app/models';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
})
export class UpdateProductComponent implements OnInit {
  private id: string = "";
  public product: Omit<Product, "_id"> = {
   title: '',
    description: '',
    image: '',
    affiliateUrl: '',
    hasFreeOption: false,
    draft: false,
    onSale: false,
    discount: 0,
    rating: 0,
    features: [],
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.loadProduct()
  }  

   loadProduct() {
     this.activatedRoute.queryParams.subscribe((queryParams) => {
      const id = queryParams['id'];

      this.productService.getProductById(id).subscribe((res) => {
        if (res.success && res.data) {
          const { _id, ...rest } = res.data;
          this.product = rest;
          this.id = _id;
        } else {
          window.alert('could not load product');
        }
      });
    });
  }

  updateProduct(data: Omit<Product, "_id">) {
    this.productService.updateProduct(data, this.id).subscribe((res) => {
      if (res.success) {
        window.alert('Updated');
      } else {
        window.alert(res.message);
      }
    });
  }
}