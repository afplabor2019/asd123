import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class AddProductService {

  constructor(private http: HttpClient) { }

  Route = 'http://localhost:3000/api';
  key = 'YcUcJwNM5sN9iSaNmGvF';

  addProduct(product) {
    this.http.post(this.Route + '/products/' + this.key, product)
      .subscribe(
        (val) => {
          console.log("POST call successful value returned in body",
            val);
        },
        response => {
          console.log("POST call in error", response);
        },
        () => {
          console.log("The POST observable is now completed.");
        }
      );
  }

  deleteProduct(id) {
    return this.http.delete(this.Route + `/products/${id}&` + this.key);
  }

  updateRead(product) {
    return this.http.put(this.Route + `/employees/${product._id}`, product);
  }
}
