import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { serverAddr } from '../http.config';

@Injectable({
  providedIn: 'root',
})
export class DeleteService {
  constructor(private httpClient: HttpClient) {}

  deleteOne(id) {
    return this.httpClient.get(`${serverAddr}/delete/${id}`);
  }
}
