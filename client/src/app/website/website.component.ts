import { Component } from '@angular/core';
import { HttpConfig } from './services/http.config';

@Component({
  selector: 'website-root',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.scss']
})

export class WebsiteComponent {
  public env: boolean;
  
  constructor() {
    this.env = new HttpConfig().getEnv();
  }

  formatStr(): string {
    return !this.env ? "Development" : "Production";
  }
}
