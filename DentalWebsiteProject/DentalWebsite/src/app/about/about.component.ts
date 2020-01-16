import { Component, OnInit } from '@angular/core';
import { GetEmployeeService } from '../services/get-employee.service';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  employees: Employee[];

  constructor(
    private getEmployeeService: GetEmployeeService
  ) { }

  ngOnInit() {
    this.getEmployeeService.getEmployees().subscribe(
      employees => {
        this.employees = employees;
      }
    );
  }
}
