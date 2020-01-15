import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConstantsService } from './constants.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddEmployeeService {

  constructor(private http: HttpClient, private _constant: ConstantsService) { }

  route = this._constant.baseAppUrl + '/employees/';

  addEmployee(employee): Observable<any> {
    return this.http.post(this.route + sessionStorage.getItem("key"), employee);
      
  }

  deleteEmployee(id) {
    return this.http.delete(this.route + `${id}&` + sessionStorage.getItem("key"));
  }

  updateEmployee(employee) {
    return this.http.put(this.route + `${employee._id}&` + sessionStorage.getItem("key"), employee);
  }
}