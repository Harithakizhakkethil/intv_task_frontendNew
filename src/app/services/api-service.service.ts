import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmployeeModal } from '../employee.nodel';

import { Observable, Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  serverUrl = 'https://intv-task-backend.onrender.com'  

  constructor(private http:HttpClient) { }

  loginApi(){  /* it returns observable */
   return this.http.get(`${this.serverUrl}/employees/1`)
  }

  //api to add employee
  addEmployeeApi(employee:EmployeeModal){
    return this.http.post(`${this.serverUrl}/users`,employee)
  }

  //api to get all employees
  getAllEmployeeApi(){
    return this.http.get(`${this.serverUrl}/users`)
  }





  private listners = new Subject<any>();
  listen():Observable<any>{
    return this.listners.asObservable();
  }
  filter(filterBy:string){
    this.listners.next(filterBy);
  }

}
