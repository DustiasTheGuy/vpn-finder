import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../interfaces/product';
import { HttpResponse } from '../../interfaces/http.interface';
import { UpdateService } from '../../services/update/update.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
})
export class EditProductComponent implements OnInit {
  public product: Product;
  public newFeature: string;

  constructor(
    private updateService: UpdateService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((data) => {
      this.product = JSON.parse(data.data);
    });
  }

  updateProduct() {
    this.updateService
      .updateProduct(this.product)
      .subscribe((response: HttpResponse) => {
        console.log(response);
      });
  }

  addFeature() {
    if (this.newFeature === undefined) return;
    this.product.features.push(this.newFeature);
    this.newFeature = undefined;
  }
}
