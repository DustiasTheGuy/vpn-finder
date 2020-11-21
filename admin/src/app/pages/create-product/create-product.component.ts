import { Component, OnInit } from '@angular/core';
import { CreateService } from '../../services/create/create.service';
import { HttpResponse } from '../../interfaces/http.interface';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss', '../form.scss']
})
export class CreateProductComponent implements OnInit {
  public newFeature: string;
  public product: Product = {
    imageURL: undefined,
    label: undefined,
    description: undefined,
    link: undefined,
    freeOption: false,
    priority: false,
    new: true,
    active: true,
    moneyBack: false,
    onSaleData: { onSale: false, discount: 0 },
    features: [ "Great value", "Amazing product" ]
  };

  constructor(private createService: CreateService) { }

  ngOnInit(): void {
  }  

  createProduct() {

  }

  addFeature() {
    if(this.newFeature === undefined) return;
    this.product.features.push(this.newFeature);
    this.newFeature = undefined;
  }
}
