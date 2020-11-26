import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})

export class IndexComponent implements OnInit{
  public categories: Array<any> = [
    { id: "faq", category: "Frequently Asked Questions", topics: [] },
    { id: "security", category: "Security Related", topics: [] },
    { id: "vpn", category: "Virtual Private Networks", topics: [] },
    { id: "general", category: "General Questions", topics: [] }
  ];

  constructor() {}

  ngOnInit(): void {    
    this.categories.forEach(i => {
      i.topics = new Array(35).fill({})
    });
  }

}
