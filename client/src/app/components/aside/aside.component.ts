import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})

export class AsideComponent implements OnInit {
  @Output() filterProducts = new EventEmitter<string>();
  public filter: string = "all";


  constructor() {}
  ngOnInit(): void {}
  applyFilters() { this.filterProducts.emit(this.filter) }

}
