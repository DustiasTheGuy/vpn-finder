import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { serverAddr } from '../http.config';

@Injectable({
  providedIn: 'root',
})
export class UpdateService {
  constructor(private httpClient: HttpClient) {}

  public updateProduct(updatedProduct) {
    return this.httpClient.post(`${serverAddr}/api/update`, updatedProduct);
  }
}
