import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ConstantsService } from './constants.service';

@Injectable({
  providedIn: 'root'
})
export class GetSubscriberService {

  constructor(private http: HttpClient, private _constrant: ConstantsService) { }

  route = this._constrant.baseAppUrl + '/subscribers/';

  getSubscriber(): Observable<any> {
    return this.http.get(this.route + sessionStorage.getItem("key"));
  }
}