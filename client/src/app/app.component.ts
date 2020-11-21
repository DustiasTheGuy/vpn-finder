import { Component } from '@angular/core';
import { HttpConfig } from './services/http.config';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public env: boolean;
  constructor() {
    this.env = new HttpConfig().getEnv();
  }


  formatStr(): string {
    return !this.env ? "Development" : "Production";
  }
}
