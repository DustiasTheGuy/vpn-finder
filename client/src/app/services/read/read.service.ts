import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReadService {
  private serverAddr: string = "http://localhost:3000";

  constructor(private httpClient: HttpClient) {}

  readProducts() {
    return this.httpClient.get(`${this.serverAddr}/api/read`) 
  }
}
