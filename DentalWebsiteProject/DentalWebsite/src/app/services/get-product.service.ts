import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConstantsService } from './constants.service';

@Injectable({
  providedIn: 'root'
})
export class GetProductService {

  constructor(private http: HttpClient, private _constant: ConstantsService) { }

  route = this._constant.baseAppUrl + '/products/';

  getProducts(): Observable<any> {
    return this.http.get(this.route + sessionStorage.getItem("key"));
  }
}
