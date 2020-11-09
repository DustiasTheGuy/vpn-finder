import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() product;
  isFlipped: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  flip() {
    this.isFlipped = !this.isFlipped ? true : false;
  }

  visitLink(link) {
    window.location.href = link;
  }
}
