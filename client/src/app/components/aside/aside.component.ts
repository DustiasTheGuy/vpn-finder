import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {
  public filter: string = "all";

  constructor() { }

  ngOnInit(): void {
  }

  applyFilters() {
    console.log(this.filter)
  }
}
