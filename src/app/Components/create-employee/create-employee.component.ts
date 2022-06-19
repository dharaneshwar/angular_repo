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


        this.employee = new Employee(soeid, name, Number(age), email, phone_number);
        console.log("came here");
        this.employeeService.addEmployee(this.employee).subscribe(data =>{
        this.response = data;
        this.router.navigate(['/']);
      });

}
}
