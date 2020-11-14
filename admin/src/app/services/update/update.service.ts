import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpResponse } from '../../interfaces/http.interface';
import { HttpConfig } from '../http.config';

@Injectable({
  providedIn: 'root'
})

export class UpdateService {

  private serverAddr: string;

  constructor(private httpClient: HttpClient) {
    this.serverAddr = new HttpConfig().getAddr();
  }


  public updateProduct(updatedProduct) {
    return this.httpClient.post(`${this.serverAddr}/api/update`, updatedProduct)
  }
}
