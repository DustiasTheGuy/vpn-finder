import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/models';
import { serverAddr } from '../services.constants';
import { HttpResponse } from '../services.types';

const baseUrl = `${serverAddr}/products`;

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  updateProduct(data: Omit<Product, '_id'>, id:string) {
    return this.httpClient.put<HttpResponse<null>>(`${baseUrl}/${id}`, data);
  }

  createProduct(data: Omit<Product, '_id'>) {
    return this.httpClient.post<HttpResponse<string>>(`${baseUrl}`, data);
  }

  deleteOneById(id: string) {
    return this.httpClient.delete<HttpResponse<null>>(`${baseUrl}/${id}`);
  }

  getProducts() {
    return this.httpClient.get<HttpResponse<Product[]>>(`${baseUrl}`);
  }

  getProductById(id: string) {
    return this.httpClient.get<HttpResponse<Product>>(`${baseUrl}/${id}`);
  }
}
