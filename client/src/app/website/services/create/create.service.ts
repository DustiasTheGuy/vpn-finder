import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpConfig } from '../http.config';

@Injectable({
  providedIn: 'root'
})
export class CreateService {
  private serverAddr: string;
  
  constructor(private httpClient: HttpClient) {
    this.serverAddr = new HttpConfig().getAddr();
  }

  addUser(data) {
    return this.httpClient.post(`${this.serverAddr}/add-user`, data)
  }

  addView(target) {
    return this.httpClient.get(`${this.serverAddr}/view/${target}`)
  }

  sendMessage(data) {
    return this.httpClient.post(`${this.serverAddr}/send-message`, data)
  }
}
