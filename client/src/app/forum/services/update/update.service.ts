import { Injectable } from '@angular/core';
import { HttpConfig } from '../http.config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UpdateService {
  private serverAddr: string;

  constructor(private httpClient: HttpClient) {
    this.serverAddr = new HttpConfig().getAddr();
  }  

  updateUser(data) {
    return this.httpClient.post(`${this.serverAddr}/update-user`, data, {
      headers: { 'Authorization': localStorage.getItem('token') }
    })
  }
}
