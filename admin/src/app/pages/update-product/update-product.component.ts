import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product';
import { Product } from 'src/app/models';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
})
export class UpdateProductComponent implements OnInit {
  public newFeature: string = "";
  public product: Product | null = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((queryParams) => {
      const id = queryParams['id'];

      this.productService.getProductById(id).subscribe((res) => {
        if (res.success && res.data) {
          console.log(res.data);
          this.product = res.data;
        } else {
          window.alert('could not load product');
        }
      });
    });
  }

  onFileChange(e: Event) {
    const target = e.target as HTMLInputElement;
    const file = target.files?.[0];
    if (!file) {
     window.alert("No file")
     return;  
   }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const result = reader.result?.toString();
      if (result && this.product) {
        this.product.image = result;
      }
    }

    reader.onerror = () => window.alert('Upload failed');
  }

  updateProduct() {
    if(!this.product) return;
    
    this.productService.updateProduct(this.product).subscribe((res) => {
      if (res.success) {
        window.alert('Updated');
      } else {
        window.alert(res.message);
      }
    });
  }

  addFeature() {
    if (this.newFeature.length) {
      this.product?.features.push(this.newFeature);
      this.newFeature = '';
    }
  }
}
