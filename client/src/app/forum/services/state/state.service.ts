import { Injectable } from '@angular/core';
import { Observable, Subject } from "rxjs";
import { JwtHelperService } from "@auth0/angular-jwt";
import { HttpClient } from '@angular/common/http';
import { HttpConfig } from '../http.config';
import { User } from '../../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})

export class StateService {
  private showLoginModal: Subject<boolean>;
  private serverAddr: string;
  private userState: Subject<User>;

  constructor(private httpClient: HttpClient) {
    this.showLoginModal = new Subject<boolean>();
    this.userState = new Subject<any>();
    this.serverAddr = new HttpConfig().getAddr();
  }

  /* Email form stuff */
  public toggleSignUpModal(state: boolean): void { 
    this.showLoginModal.next(state) 
  }

  public stateUpdateSignUpModal(): Observable<boolean> { 
    return this.showLoginModal 
  }
  
  /* User stuff */
  public updateUserState(state: User): void { // update the user state globaly
    this.userState.next(state);
  }

  public userStateChanges(): Observable<User> {
    return this.userState; // subscribe to this for any changes to user object
  }

  public validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  public authorized(): boolean {
    let helper = new JwtHelperService();
    let token = localStorage.getItem('token')
    let isExpired = helper.isTokenExpired(token);

    return !isExpired;
  }

  public signOut() {
    this.httpClient.get(`${this.serverAddr}/sign-out`, { headers: { 'Authorization': localStorage.getItem('token')}})
    .subscribe(response => {
      window.localStorage.removeItem('token');
      this.updateUserState(null);
    })
  }
}
