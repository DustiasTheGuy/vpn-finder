import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss']
})
export class JumbotronComponent implements OnInit {
  @Input() height;

  constructor() { }

  ngOnInit(): void {
  }

  getImageURL(imageURL: string): string {
    return '/assets/images/backgrounds/' + imageURL
  }
}
