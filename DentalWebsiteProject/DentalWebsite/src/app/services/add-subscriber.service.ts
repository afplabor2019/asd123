import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConstantsService } from './constants.service';

@Injectable({
  providedIn: 'root'
})
export class AddSubscriberService {

  constructor(private http: HttpClient, private _constant: ConstantsService) { }

  route: string = this._constant.baseAppUrl + '/subscribers/';

  addSubscriber(subscriber) {
    this.http.post(this.route + this._constant.publicKey, subscriber)
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

  deleteSubscriber(id) {
    return this.http.delete(this.route + `${id}&` + sessionStorage.getItem("key"));
  }

  updateSubscriber(subscriber) {
    return this.http.put(this.route + `${subscriber._id}&` + sessionStorage.getItem("key"), subscriber);
  }
}