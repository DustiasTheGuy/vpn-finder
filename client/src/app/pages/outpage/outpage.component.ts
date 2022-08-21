import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReadService } from '../../services/read/read.service';
import { Product } from '../../interfaces/product';

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
    private readService: ReadService
  ) {}

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe((params) => {
      const id = params['id'];

      this.readService.readProduct(id).subscribe((response) => {
        if (response.success) {
          this.product = response.data;
          // this.timout = window.setTimeout(
          //   () => (window.location.href = response.data.link),
          //   5000
          // );
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
