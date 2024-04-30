import { Injectable } from '@angular/core';
import { mockTasks } from '../app.mock';
import { Observable, of } from 'rxjs';
import { Product, ProductResponse, Task } from '../app.types';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  baseUrl: string = 'https://dummyjson.com/products';
  constructor(private http: HttpClient) {}

  getProducts(): Observable<ProductResponse> {
    return this.http.get<ProductResponse>(`${this.baseUrl}?limit=10`);
  }

  deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(`${this.baseUrl}/${id}`);
  }
}
