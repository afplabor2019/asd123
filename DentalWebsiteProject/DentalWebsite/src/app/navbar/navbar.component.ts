import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
 }
 myFunction() {
  var x = document.getElementById("mobile-nav");

  // if (x.style.flexDirection === "row") {
  //   x.style.flexDirection = "column";
  // }
  // else {
  //   x.style.flexDirection = "row";
  // }
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
}