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

  readProducts() {
    return this.httpClient.get(`${this.serverAddr}/read`) 
  }
  
  readProduct(id: string) {
    return this.httpClient.get(`${this.serverAddr}/read/${id}`)
  }
}
