import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() product: Product;
  isFlipped: boolean = false;
  constructor() { }

  ngOnInit(): void {
    this.product.features.forEach(element => {
      let str = "";
      str+=element.key;
      element.value.forEach(s => str += s);
      element["totalCharacters"] = str.trim().length;
      this.sortObjects(this.product.features);
    })
  }

  sortObjects(arr: Array<any>) { arr.sort((a, b) => a.totalCharacters - b.totalCharacters) }
  visitLink(link) { window.location.href = link }
}
