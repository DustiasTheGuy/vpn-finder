import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { serverAddr } from '../http.config';

@Injectable({
  providedIn: 'root',
})
export class ReadService {
  constructor(private httpClient: HttpClient) {}

  readProducts() {
    return this.httpClient.get(`${serverAddr}/read`);
  }

  readProduct(id: string) {
    return this.httpClient.get(`${serverAddr}/read/${id}`);
  }
}
