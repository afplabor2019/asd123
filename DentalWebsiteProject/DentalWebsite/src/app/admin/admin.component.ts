import { Component, OnInit } from '@angular/core';
import { AddEmployeeService } from '../services/add-employee.service'

import { Employee } from '../models/employee'
import { GetEmployeeService } from '../services/get-employee.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  name: String;
  specialization: String;
  introduction: String;
  email: String;
  telephone: String;
  image: String;

  employees: Employee[];

  constructor(
    private addEmployeeService: AddEmployeeService,
    private getEmployeeService: GetEmployeeService
  ) { }

  ngOnInit() {
    if (sessionStorage.getItem("key") == null) {
      window.location.href = "http://localhost:4200/login";
    }
    this.GetEmployees();
  }

  GetEmployees() {
    this.getEmployeeService.getEmployees().subscribe(
      employees => {
        this.employees = employees;
      }
    );
  }

  OnAddSubmint() {
    var employee = {
      name: this.name,
      specialization: this.specialization,
      introduction: this.introduction,
      email: this.email,
      telephone: this.telephone,
      image: this.image
    }
    this.addEmployeeService.addEmployee(employee).subscribe(
      (val) => {
          console.log(val);
      },
      error => {
        alert(error);
      },
      () => {
        this.GetEmployees();
      }
    );
  }

  delete(id) {
    this.addEmployeeService.deleteEmployee(id).subscribe(
      () => {
        for (var i = 0; i < this.employees.length; i++) {
          if (this.employees[i]._id == id) {
            this.employees.splice(i, 1);
          }
        }
      },
      error => {
        alert(error);
      },
      () => {
        this.GetEmployees();
      }
    );
  }

  Logout() {
    sessionStorage.removeItem("key");
    window.location.href = "http://localhost:4200";
  }
}
