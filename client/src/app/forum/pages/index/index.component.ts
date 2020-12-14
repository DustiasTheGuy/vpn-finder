import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../interfaces/user.interface';
import { StateService } from '../../services/state/state.service';
import { ReadService } from '../../services/read/read.service';
import { Categories } from '../../categories';
import { HttpResponse } from '../../interfaces/http.interface';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})

export class IndexComponent implements OnInit, OnDestroy {
  public user: User;
  public tableData;
  public products;
  private categories;
  
  
  constructor(
    private router: Router,
    private stateService: StateService, 
    private readService: ReadService) {
    this.categories = new Categories();
  }

  ngOnDestroy() {}

  ngOnInit(): void {   
    this.readTopics();
    this.loadProducts();
    this.stateService.userStateChanges()
    .subscribe((newState: User) => {
      this.user = newState;
    });
  }

  adclicked(product) {
    this.router.navigate(["/visit"], { queryParams: { id: product._id }})
  }

  readTopics() {
    this.readService.readTopics({}).subscribe((response: HttpResponse) => {
      console.log(response);
      this.tableData = response.data;
    })
  }

  loadProducts() {
    this.readService.loadProducts()
    .subscribe((response: HttpResponse) => 
    response.success ? 
    this.products = response.data : 
    this.products = [])
  }
}