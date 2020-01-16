import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name: String;
  password: String;
  errors: string[];

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  OnLoginSubmit() {
    sessionStorage.removeItem("key");
    this.loginService.Login(this.name, this.password).subscribe(
      responses => {
        sessionStorage.setItem("key", responses);
        window.location.href = "http://localhost:4200/admin";
      },
      error => {
        alert("Sikertelen bejelentkezés");
      }
      )
  }
}
