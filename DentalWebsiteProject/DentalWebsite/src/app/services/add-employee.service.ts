import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConstantsService } from './constants.service';

@Injectable({
  providedIn: 'root'
})
export class AddEmployeeService {

  constructor(private http: HttpClient, private _constant: ConstantsService) { }

  route = this._constant.baseAppUrl + '/employees/';

  addEmployee(employee) {
    this.http.post(this.route + sessionStorage.getItem("key"), employee)
      .subscribe(
        (val) => {
            val;
        },
        error => {
          alert(error);
        }
    );
  }

  deleteEmployee(id) {
    return this.http.delete(this.route + `${id}&` + sessionStorage.getItem("key"));
  }

  updateEmployee(employee) {
    return this.http.put(this.route + `${employee._id}&` + sessionStorage.getItem("key"), employee);
  }
}