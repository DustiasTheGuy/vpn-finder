import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from 'src/app/interfaces/product';
import { HttpResponse } from 'src/app/interfaces/http.interface';

const serverAddr = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class ReadService {
  constructor(private httpClient: HttpClient) {}

  readProducts() {
    return this.httpClient.get<HttpResponse<Product[]>>(`${serverAddr}/read`);
  }

  readProduct(id: string) {
    return this.httpClient.get<HttpResponse<Product>>(
      `${serverAddr}/read/${id}`,
    );
  }
}
