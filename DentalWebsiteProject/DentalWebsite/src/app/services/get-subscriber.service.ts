import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Subscriber } from '../models/subscriber';

@Injectable({
  providedIn: 'root'
})
export class GetSubscriberService {

  constructor(private http: HttpClient) { }

  getSubscriber(): Observable<any> {
    return this.http.get('http://localhost:3000/api/subscribers/YcUcJwNM5sN9iSaNmGvF');
  }
}