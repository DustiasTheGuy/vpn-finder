import { Injectable } from '@angular/core';
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private showLoginModal: Subject<boolean>;

  constructor() {
    this.showLoginModal = new Subject<boolean>();
  }

  /* Email form stuff */
  public toggleLoginModal(state: boolean): void { this.showLoginModal.next(state) }
  public stateUpdateLoginModal(): Observable<boolean> { return this.showLoginModal }


  public validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
}
