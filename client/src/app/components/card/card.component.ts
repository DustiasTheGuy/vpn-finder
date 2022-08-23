import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../interfaces/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() product: Product | null = null;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  getProductLink(product: Product | null) {
    if (!product) return;

    return `/visit?id=${product._id}`;
  }
}
