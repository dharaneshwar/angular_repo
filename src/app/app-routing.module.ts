import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './Components/create-employee/create-employee.component';
import { EmployeeEditComponent } from './Components/employee-edit/employee-edit.component';
import { EmployeeMenuComponent } from './Components/employee-menu/employee-menu.component';
import { EmployeeListComponent } from './Components/employee_list/employee_list.component';
import { LoginComponent } from './Components/login/login.component';
import { AuthGuard } from './Services/auth.guard';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'home', component: EmployeeListComponent, canActivate: [AuthGuard]},
  {path:'edit', component: EmployeeEditComponent, canActivate: [AuthGuard]},
  {path:'create', component: CreateEmployeeComponent, canActivate: [AuthGuard]},
  {path:'**', redirectTo: '/login'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
