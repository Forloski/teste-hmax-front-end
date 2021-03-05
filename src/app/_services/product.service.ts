import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../_interfaces/IProduct';

const API_URL = 'http://localhost:3333/';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[] | null> {
    return this.http.get<Product[]>(API_URL + 'products', { responseType: 'json' });
  }

  deleteProduct(): Observable<any> {
    return this.http.delete(API_URL + 'user', { responseType: 'text' });
  }

  updateProduct({ name, id, description, price }: Product): Observable<Product | null> {
    return this.http.put<Product>(API_URL + 'products/' + id, { name, id, description, price }, { responseType: 'json' });
  }
}
