import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  scrollTo(element: HTMLElement | null) {
    element?.scrollIntoView({
      behavior: 'smooth',
    });
  }

  callToAction() {
    this.scrollTo(document.getElementById('main-content'));
  }
}
