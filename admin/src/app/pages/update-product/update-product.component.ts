import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product';
import { Product } from 'src/app/models';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
})
export class UpdateProductComponent implements OnInit {
  public newFeature: string;
  public product: Product;

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

  onFileChange(e: Event) { 
    const target = e.target as HTMLInputElement;
    const file = target.files?.[0]
    if (!file) {
      window.alert("No file")
      return;  
    }
 
    const reader = new FileReader();
    reader.readAsDataURL(target.files[0]); 
    reader.onload = () => (this.product.image = reader.result.toString());
    reader.onerror = () => window.alert('Upload failed');
  }

  updateProduct() {
    this.productService.updateProduct(this.product).subscribe((res) => {
      if (res.success) {
        window.alert('Updated');
      } else {
        window.alert('Error');
      }
    });
  }

  addFeature() {
    if (this.newFeature.length) {
      this.product.features.push({ label: this.newFeature });
      this.newFeature = '';
    }
  }
}
