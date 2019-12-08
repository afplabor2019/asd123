import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class GetEmployeeService {

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<any> {
    return this.http.get('http://localhost:3000/api/employees');
  }
}