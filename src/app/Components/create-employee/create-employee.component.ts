import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/Services/employee.service';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/Models/employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  response: any;
  message : string;
  public employee : Employee;
  constructor(private employeeService: EmployeeService, private router : Router) { }

  ngOnInit(): void {
  }

  createEmployee() {

        let soeid = (<HTMLInputElement>document.getElementById('soeid')).value;
        let name = (<HTMLInputElement>document.getElementById('name')).value;
        let age = (<HTMLInputElement>document.getElementById('age')).value;
        let email = (<HTMLInputElement>document.getElementById('email')).value;
        let phone_number = (<HTMLInputElement>document.getElementById('phone')).value;

        if (Number.isNaN(Number(age))){
          alert("Age is not in number format");
      }
  
      if (!email.match("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")){
        alert("Email is not in right format");
     }
  
     if (!phone_number.match("[789][0-9]{9}")){
      alert("Phone number is not in right format");
  }


  if (!Number.isNaN(Number(age)) &&  email.match("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")  && phone_number.match("[789][0-9]{9}")){
        this.employee = new Employee(soeid, name, Number(age), email, phone_number);
        console.log("came here");
        this.employeeService.addEmployee(this.employee).subscribe(data =>{
        this.response = data;
        this.router.navigate(['/home']);
      });
    }
    else
    this.message = "Not in the right format. Try again";

}
}
