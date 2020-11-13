import { Component, OnInit } from '@angular/core';
import { StateService } from '../../services/state/state.service';

@Component({
  selector: 'app-cookie-consent',
  templateUrl: './cookie-consent.component.html',
  styleUrls: ['./cookie-consent.component.scss']
})
export class CookieConsentComponent implements OnInit {
  public acceptCookies: boolean = false;
  public readCookiePolicy: boolean = false;

  constructor(private stateService: StateService) { }

  ngOnInit(): void {
    this.stateService.onTogglePrivacy().subscribe((state: boolean) => this.readCookiePolicy = state )
    this.acceptCookies = localStorage.getItem("acceptCookies") === "1" ? true : false;
  }

  accept() {
    this.acceptCookies = true;
    this.readCookiePolicy = false;
    localStorage.setItem("acceptCookies", this.acceptCookies ? "1" : "0")
  }

  readPolicy() { this.readCookiePolicy = !this.readCookiePolicy ? true : false }
}
