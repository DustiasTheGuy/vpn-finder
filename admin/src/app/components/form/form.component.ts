import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent {
  public newFeature: string = "";
    
  @Output() onSubmit = new EventEmitter<Omit<Product, '_id'>>();
  @Input() pageTitle: string = "";
  @Input() product: Omit<Product, '_id'> = {
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

  submit() {
    this.onSubmit.emit(this.product);
  }

  onFileChange(e: Event) {
    const target = e.target as HTMLInputElement;
    const file = target.files?.[0];
    if (!file) {
     window.alert("No file");
     return;
   }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const result = reader.result?.toString();
      if (result) {
        this.product.image = result;
      } 
    }

    reader.onerror = () => window.alert('Upload failed');
  }

  addFeature() {
    if (this.newFeature.length) {
      this.product?.features.push(this.newFeature);
      this.newFeature = '';
    }
  }
}
