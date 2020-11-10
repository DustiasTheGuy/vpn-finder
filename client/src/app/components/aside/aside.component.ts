import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})

export class AsideComponent implements OnInit {
  public filter: string = "all";
  @Output() filterProducts = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  applyFilters() {
    console.log("Emit")
    this.filterProducts.emit(this.filter);
  }
}
