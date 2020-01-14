import { Component, OnInit } from '@angular/core';

import { Subscriber } from '../models/subscriber';
import { GetSubscriberService } from '../services/get-subscriber.service';
import { AddSubscriberService } from '../services/add-subscriber.service';
 

@Component({
  selector: 'app-admin-subscribers',
  templateUrl: './admin-subscribers.component.html',
  styleUrls: ['./admin-subscribers.component.css']
})
export class AdminSubscribersComponent implements OnInit {
  name: String;
  email: String;

  subscribers: Subscriber[];

  constructor(
    private addSubscriberService: AddSubscriberService,
    private getSubscriberService: GetSubscriberService
  ) { }

  ngOnInit() {
    this.GetSubscribers();
  }
  
  GetSubscribers() {
    this.getSubscriberService.getSubscriber().subscribe(
      subscribers => {
        this.subscribers = subscribers;
      }
    );
  }

  delete(id) {
    this.addSubscriberService.deleteSubscriber(id).subscribe(
      date => {
        for (var i = 0; i < this.subscribers.length; i++) {
          if (this.subscribers[i]._id == id) {
            this.subscribers.splice(i, 1);
          }
        }
      }
    );
    this.GetSubscribers();
  }
}
