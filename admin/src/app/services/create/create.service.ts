import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { serverAddr } from '../http.config';

@Injectable({
  providedIn: 'root',
})
export class CreateService {
  constructor(private httpClient: HttpClient) {}

  createDocument(data) {
    return this.httpClient.post(`${serverAddr}/create`, data);
  }
}
