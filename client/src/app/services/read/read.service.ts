import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/models/product.model';
import { HttpResponse } from 'src/app/models/http.model';

const serverAddr = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class ReadService {
  constructor(private httpClient: HttpClient) {}

  readProducts() {
    return this.httpClient.get<HttpResponse<Product[]>>(
      `${serverAddr}/product`,
    );
  }

  readProduct(id: string) {
    return this.httpClient.get<HttpResponse<Product>>(
      `${serverAddr}/product/${id}`,
    );
  }
}
