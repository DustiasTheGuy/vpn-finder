import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services';
import { Product } from 'src/app/models';

@Component({
  selector: 'app-outpage',
  templateUrl: './outpage.component.html',
  styleUrls: ['./outpage.component.scss'],
})
export class OutpageComponent implements OnInit, OnDestroy {
  public product: Product | null = null;
  private timout: number | null = null;

  constructor(
    private activeRoute: ActivatedRoute,
    private readService: ProductService,
  ) {}

  ngOnInit() {
    this.activeRoute.queryParams.subscribe((params) => {
      const id = params['id'];

      this.readService.getProductById(id).subscribe((response) => {
        if (response.success) {
          this.product = response.data;
          this.timout = window.setTimeout(
            () => (window.location.href = response.data.affiliateUrl),
            1000,
          );
        }
      });
    });
  }

  ngOnDestroy() {
    if (this.timout) {
      window.clearTimeout(this.timout);
    }
  }
}
