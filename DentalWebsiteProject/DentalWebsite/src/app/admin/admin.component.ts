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
    this.addEmployeeService.addEmployee(employee);
  }

  delete(id) {
    this.addEmployeeService.deleteEmployee(id).subscribe(
      data => {
        for (var i = 0; i < this.employees.length; i++) {
          if (this.employees[i]._id == id) {
            this.employees.splice(i, 1);
          }
        }
      }
    );
  }
}
