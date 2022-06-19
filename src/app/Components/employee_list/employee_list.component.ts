import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Models/employee';
import { EmployeeService } from 'src/app/Services/employee.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee_list.component.html',
  styleUrls: ['./employee_list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[]=[];
  response:any;
  
  constructor(private employeeService:EmployeeService,private router:Router) { }

  ngOnInit(): void {
    this.employeeService.getAllEmployees().subscribe(data=>
      this.employees=data);
  }

  editEmployee(employee: Employee)
  {
    console.log("triggered");
    let navigationExtras : NavigationExtras = {
      queryParams:{
        "soeid" : employee.soeid,
        "name" : employee.name,
        "age" : employee.age,
        "phone" : employee.phone_number
      }
    };
    this.router.navigate(["edit"], navigationExtras);
    //this.employeeService.editEmployee(employee);
  }

  deleteEmployee(employee: Employee){
    if(confirm("Are you sure you want to delete this record?")){
      this.employeeService.deleteEmployee(employee.soeid).subscribe(data=>{
        console.log(data);
        this.employeeService.getAllEmployees().subscribe(data=>
          this.employees=data);}
          );
    }
    
  }
  
}
