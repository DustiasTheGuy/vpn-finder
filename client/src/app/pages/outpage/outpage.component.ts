import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReadService } from '../../services/read/read.service';
import { HttpResponse } from '../../interfaces/http.interface';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-outpage',
  templateUrl: './outpage.component.html',
  styleUrls: ['./outpage.component.scss']
})
export class OutpageComponent implements OnInit, OnDestroy {
  public product: Product;
  private timout;

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute, 
    private readService: ReadService) {}

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe(params => {
      this.readService.readProduct(params.id)
      .subscribe((response: HttpResponse) => { 
        if(response.success) {
          this.product = response.data;
          this.timout = setTimeout(() => window.location.href = response.data.link, 5000)
        }
      })
    })
  }

  ngOnDestroy() {
    window.clearTimeout(this.timout);
  }

}
