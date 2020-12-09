import { Component, OnInit, Input } from '@angular/core';
import { Categories } from '../../categories';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() tableData;
  private dataStorage; 
  public selectedCategory = '0';
  public selectedFilter = '0';
  public index: number;
  public categories: string[];
  public reversedTracker = { 0: false, 1: false, 2: false, 4: false }

  constructor() {
    this.categories = new Categories().getCategories();
  }

  ngOnInit(): void {
    this.dataStorage = this.tableData;
  }

  applyFilters(): void {
    //this.filterByCategory(this.selectedCategory);
    this.filterByValue(this.selectedFilter);
    return;
  }

  filterByValue(index): void {
    index = parseInt(index);

    if(index === this.index) {
      this.reversedTracker[index] = !this.reversedTracker[index] ? true : false;
      this.tableData.reverse();
      return;
    }

    this.assignData(index);
    this.selectedFilter = index.toString();
    this.index = index;
    return;
  }

  assignData(index: number): any[] {
    switch(index) {
      case 0: 
      return this.tableData = this.tableData.sort((a, b) => 
      <any>new Date(a.created) - <any>new Date(b.created)); // Most recent or last

      case 1: 
      return this.tableData = this.tableData.sort((a, b) => 
      a.views - b.views); // Most Views

      case 2: 
      return this.tableData = this.tableData.sort((a, b) => 
      a.imageURLs.length - b.imageURLs.length); // Most Images

      case 3: 
      return this.tableData = this.tableData.sort((a, b) => 
      (a.repliesLength + a.views) - (b.repliesLength + b.views)); // Most Activity

      case 4: 
      return this.tableData = this.tableData.sort((a, b) => 
      a.repliesLength - b.repliesLength); // Most Replies
    }
  }

  filterByCategory(index): void {
    index = parseInt(index);

    index === 0 ? 
    this.tableData = this.dataStorage : 
    this.tableData = this.dataStorage.filter(element => 
    element.category === this.categories[index - 1]);

    return;
  }
}
