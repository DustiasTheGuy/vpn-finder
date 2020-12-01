import { Component, OnInit } from '@angular/core';
import { ReadService } from '../../services/read/read.service';
import { HttpResponse } from '../../interfaces/http.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent implements OnInit {
  public searchStr: string;
  public searchResults: any[] = [];

  constructor(private readService: ReadService, private router: Router) {}

  ngOnInit(): void {
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
