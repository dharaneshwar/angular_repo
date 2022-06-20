import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../Models/employee';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

private baseUrl='http://localhost:8080/api/employees';

  constructor(private http:HttpClient) { }

  getAllEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.baseUrl);
  }

  getEmployeeBySoeid(soeid:string):Observable<Employee>{
    return this.http.get<Employee>(`${this.baseUrl}/${soeid}`);
  }
  //getEmployeeById(id:number):Observable<Employee>{
   // return this.http.get<Employee>(`${this.baseUrl}/id`);
   addEmployee(employee:Employee):Observable<any>{
      let empHeaders = new HttpHeaders({'Content-Type': 'application/json'});
      console.log("came till here");
     return this.http.post(this.baseUrl, JSON.stringify(employee), {headers:empHeaders});

   }
   editEmployee(employee:Employee):Observable<any>{
    let empHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    console.log("came till put");
   return this.http.put(this.baseUrl, JSON.stringify(employee), {headers:empHeaders});
   }
   deleteEmployee(soeid:string):Observable<any>{
return this.http.delete(`${this.baseUrl}/${soeid}` ,{responseType: 'text'});
   }

 }

