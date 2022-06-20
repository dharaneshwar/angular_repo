import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/Services/employee.service';
import { Employee } from 'src/app/Models/employee';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  employees:Employee[]=[];
  employee : Employee;
  message : string = "";
  response:any;
  constructor(private employeeService: EmployeeService, private router:Router, private route:ActivatedRoute) {
    this.employee = new Employee("","",0,"","");
    this.route.queryParams.subscribe(params => {
      this.employee.name = params['name'];
      this.employee.soeid = params['soeid'];
      this.employee.age = params['age'];
      this.employee.phone_number = params['phone'];
      console.log(this.employee.name);

    });
   
  
  }

  ngOnInit(): void {
    this.employeeService.getAllEmployees().subscribe(data=>
      this.employees=data);
  }
  deleteEmployee(soeid:string){
    this.employeeService.deleteEmployee(soeid).subscribe(data=>
      this.response=data);
  }


  editEmployee(soeid : string) {

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
    this.employee= new Employee(soeid, name, Number(age), email, phone_number);

    console.log(age, email, phone_number);
    this.employeeService.editEmployee(this.employee).subscribe(data =>{
      this.message = "Edited Successfully";
      this.router.navigate(['/home']);
    });
  }

  else
    this.message = "Not in the right format. Try again"
  
}
}
