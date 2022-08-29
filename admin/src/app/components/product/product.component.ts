import { Component ,Input} from '@angular/core';
import { Product } from 'src/app/models';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product: Omit<Product, "_id"> = {
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

  cutStr(str: string)  {
    const maxLength = 120
  
    if (str.length > maxLength) {
      return str.slice(0, maxLength - 3) + '...';
    }

    return str;
  };

  getStarClass(index: number) {
    if (index < this.product.rating) {
      return 'material-icons-outlined star-yellow'
    } else {
      return 'material-icons-outlined star-dark'
    }
  }
}
      