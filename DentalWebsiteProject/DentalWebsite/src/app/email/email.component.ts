import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

  

}
