import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../Models/employee';
import { catchError, map, tap } from 'rxjs/operators';
import { Credentials } from '../Models/credentials';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

private baseUrl='http://localhost:8080/api/auth';
  constructor(private http:HttpClient) { }


  //getEmployeeById(id:number):Observable<Employee>{
   // return this.http.get<Employee>(`${this.baseUrl}/id`);
   authenticate(soeid : string):Observable<any>{
      let credHeaders = new HttpHeaders({'Content-Type': 'application/json'});
      console.log("came till auth");
     return this.http.post(`${this.baseUrl}/${soeid}`, {headers:credHeaders});

   }

}
