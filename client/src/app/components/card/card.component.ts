import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../interfaces/product';
import { CreateService } from '../../services/create/create.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() product: Product;

  constructor(private createService: CreateService, private router: Router) { }

  ngOnInit(): void {
    this.product["showFeatures"] = false;
  }

  visitLink(product) {
    this.createService.addView(product._id)
    .subscribe(response => {
      //window.location.href = product.link; 
      this.router.navigate(["/visit"], { queryParams: { id: product._id }})
    })
  }
}
