import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpConfig } from '../http.config';

@Injectable({
  providedIn: 'root'
})
export class ReadService {
  private serverAddr: string;

  constructor(private httpClient: HttpClient) {
    this.serverAddr = new HttpConfig().getAddr();
  }

  signIn(data) {
    return this.httpClient.post(`${this.serverAddr}/sign-in`, data)
  }

  readUser() {
    return this.httpClient.get(`${this.serverAddr}/read-user`, {
      headers: { 'Authorization': localStorage.getItem('token') }
    })
  }
}
