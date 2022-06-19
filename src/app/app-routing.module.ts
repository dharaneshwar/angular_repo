import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './Components/create-employee/create-employee.component';
import { EmployeeEditComponent } from './Components/employee-edit/employee-edit.component';
import { EmployeeMenuComponent } from './Components/employee-menu/employee-menu.component';
import { EmployeeListComponent } from './Components/employee_list/employee_list.component';
import { LoginComponent } from './Components/login/login.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'edit', component: EmployeeEditComponent},
  {path:'create', component: CreateEmployeeComponent},
  {path:'', component: EmployeeListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
