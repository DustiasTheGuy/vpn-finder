import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ReadService } from '../../services/read/read.service';
import { HttpResponse } from '../../interfaces/http.interface';
import { StateService } from '../../services/state/state.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent implements OnInit {
  public searchStr: string;
  public searchResults: any[] = [];
  public sidenavState: boolean = false;

  constructor(
    public stateService: StateService,
    private readService: ReadService, 
    private router: Router) {}

  ngOnInit(): void {
    this.stateService.getSidenavState()
    .subscribe(newState => this.sidenavState = newState);
  }

  search(searchStr: string) {
    this.searchResults = [];
    this.readService.search(searchStr)
    .subscribe((response: HttpResponse) => {
      this.searchResults = response.data;
    })
  }

  navigate(ID: string) {
    this.router.navigate([`/forum/${ID}`]);
  }
}
