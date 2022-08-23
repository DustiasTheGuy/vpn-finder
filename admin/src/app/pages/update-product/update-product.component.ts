import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product';
import { Product } from 'src/app/models';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
})
export class UpdateProductComponent implements OnInit {
  public product: Product;
  public newFeature: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((queryParams) => {
      const id = queryParams['id'];

      this.productService.getProductById(id).subscribe((res) => {
        if (res.success) {
          this.product = res.data;
        } else {
          window.alert('could not load product');
        }
      });
    });
  }

  getBase64(file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => (this.product.image = reader.result.toString());
    reader.onerror = () => window.alert('Upload failed');
  }

  onFileChange(e: Event) {
    const target = e.target as HTMLInputElement;
    this.getBase64(target.files[0]);
  }

  updateProduct() {
    this.productService.updateProduct(this.product).subscribe((res) => {
      console.log(res);
    });
  }

  addFeature() {}
}
