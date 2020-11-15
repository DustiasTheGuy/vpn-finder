import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpConfig } from '../http.config';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {
  private serverAddr: string;

  constructor(private httpClient: HttpClient) {
    this.serverAddr = new HttpConfig().getAddr();
  }

  deleteOne(id) {
    return this.httpClient.get(`${this.serverAddr}/api/delete/${id}`);
  }
}
