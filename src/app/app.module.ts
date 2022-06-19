import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './Components/employee_list/employee_list.component';
import { EmployeeComponent } from './Components/employee/employee.component';
import { CreateEmployeeComponent } from './Components/create-employee/create-employee.component';
import { EmployeeMenuComponent } from './Components/employee-menu/employee-menu.component';
import { EmployeeEditComponent } from './Components/employee-edit/employee-edit.component';
import { LoginComponent } from './Components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeComponent,
    CreateEmployeeComponent,
    EmployeeMenuComponent,
    EmployeeEditComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
