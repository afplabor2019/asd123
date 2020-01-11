import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class AddEmployeeService {

  constructor(private http: HttpClient) { }

  Route = 'http://localhost:3000/api';

  addEmployee(employee) {
    this.http.post(this.Route + '/employees/YcUcJwNM5sN9iSaNmGvF', employee)
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

  deleteEmployee(id) {
    return this.http.delete(this.Route + `/employees/${id}&YcUcJwNM5sN9iSaNmGvF`);
  }

  updateRead(employee) {
    return this.http.put(this.Route + `/employees/${employee._id}`, employee);
  }
}