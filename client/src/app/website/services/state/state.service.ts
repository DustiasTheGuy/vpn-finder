import { Injectable } from '@angular/core';
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class StateService {
  private showEmailForm: Subject<boolean>;
  private showPrivacyDocs: Subject<boolean>;

  constructor() {
    this.showEmailForm = new Subject<boolean>();
    this.showPrivacyDocs = new Subject<boolean>();
  }

  /* Email form stuff */
  public toggleForm(state: boolean): void { this.showEmailForm.next(state) }
  public onToggle(): Observable<boolean> { return this.showEmailForm }

  /* Privacy stuff */
  public togglePrivacy(state: boolean): void { this.showPrivacyDocs.next(state) }
  public onTogglePrivacy(): Observable<boolean> { return this.showPrivacyDocs }


  public validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

}   
