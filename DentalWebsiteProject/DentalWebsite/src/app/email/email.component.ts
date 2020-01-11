import { Component, OnInit } from '@angular/core';
import { AddSubscriberService } from '../services/add-subscriber.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  name: String;
  email: String;

  constructor(
    private addSubscriberService: AddSubscriberService
  ) { }

  ngOnInit() {
  }

  openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

  OnAddSubmit() {
    var email = {
      name: this.name,
      email: this.email
    }
    this.addSubscriberService.addSubscriber(email);
  }
}
