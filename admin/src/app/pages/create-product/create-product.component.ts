import { Component } from '@angular/core';
import { Product } from 'src/app/models';
import { ProductService } from 'src/app/services/product';

const initialProductState: Omit<Product, '_id'> = {
  title: '',
  description: '',
  image: '',
  affiliateUrl: '',
  hasFreeOption: false,
  moneyBackGuarantee: false,
  draft: false,
  onSale: false,
  discount: 0,
  features: [],
};

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
})
export class CreateProductComponent {
  public newFeature: string;

  public product: Omit<Product, '_id'> = initialProductState;

  constructor(private createService: ProductService) {}

  createProduct() {
    this.createService.createProduct(this.product).subscribe((res) => {
      if (res.success) {
        this.product = initialProductState;
      } else {
        window.alert(res.message);
      }
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

  addFeature() {}
}
