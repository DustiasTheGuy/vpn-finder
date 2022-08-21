import { Component } from '@angular/core';
import { CreateService } from '../../services/create/create.service';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
})
export class CreateProductComponent {
  public newFeature: string;

  public product: Product = {
    imageURL: '',
    label: '',
    description: '',
    link: '',
    freeOption: false,
    priority: false,
    new: true,
    active: true,
    moneyBack: false,
    onSaleData: { onSale: false, discount: 0 },
    features: [],
  };

  constructor(private createService: CreateService) {}

  createProduct() {
    this.createService
      .createDocument(this.product)
      .subscribe((res) => console.log(res));
  }

  addFeature() {
    if (this.newFeature === undefined) return;
    this.product.features.push(this.newFeature);
    this.newFeature = undefined;
  }
}
