import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConstantsService } from './constants.service';

@Injectable({
  providedIn: 'root'
})
export class AddProductService {

  constructor(private http: HttpClient, private _constant: ConstantsService) { }

  route = this._constant.baseAppUrl + '/products/';

  addProduct(product) {
    this.http.post(this.route + sessionStorage.getItem("key"), product)
      .subscribe(response => console.log(response)
    );
  }

  deleteProduct(id) {
    return this.http.delete(this.route + `${id}&` + sessionStorage.getItem("key"));
  }

  updateProduct(product) {
    return this.http.put(this.route + `${product._id}&` + sessionStorage.getItem("key"), product);
  }
}
