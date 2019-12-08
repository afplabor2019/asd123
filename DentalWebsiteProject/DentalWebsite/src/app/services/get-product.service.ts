import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class GetProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get('http://localhost:3000/api/products');
  }
}
