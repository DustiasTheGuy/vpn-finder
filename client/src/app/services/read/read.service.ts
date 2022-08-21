import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from 'src/app/interfaces/product';

const serverAddr = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class ReadService {
  constructor(private httpClient: HttpClient) {}

  readProducts(): Observable<any> {
    return this.httpClient.get(`${serverAddr}/read`);
  }

  readProduct(id: string): Observable<any> {
    return this.httpClient.get(`${serverAddr}/read/${id}`);
  }
}
