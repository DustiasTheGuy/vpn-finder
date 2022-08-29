import { Component } from '@angular/core';
import { Product } from 'src/app/models';
import { ProductService } from 'src/app/services/product';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
})
export class CreateProductComponent {
  public newFeature: string = "";
  public product: Omit<Product, '_id'> = {
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

  constructor(private createService: ProductService) {}

  createProduct(data: Omit<Product, "_id">) {
    this.createService.createProduct(data).subscribe((res) => {
      if (res.success) {
        window.alert('Created');
      } else {
        window.alert(res.message);
      }
    });
  }
}
