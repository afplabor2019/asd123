import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Subscriber } from '../models/subscriber';

@Injectable({
  providedIn: 'root'
})
export class AddSubscriberService {

  constructor(private http: HttpClient) { }

  Route = 'http://localhost:3000/api';
  key = '2033792262';
  addSubscriber(subscriber) {
    this.http.post(this.Route + '/subscribers/' + this.key, subscriber)
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
    return this.http.delete(this.Route + `/subscribers/${id}&YcUcJwNM5sN9iSaNmGvF`);
  }

  updateRead(subscriber) {
    return this.http.put(this.Route + `/subscribers/${subscriber._id}`, subscriber);
  }
}