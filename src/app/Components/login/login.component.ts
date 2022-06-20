import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Credentials } from 'src/app/Models/credentials';
import { AuthService } from 'src/app/Services/auth.service';
import * as shajs from 'sha.js';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private authService: AuthService, private route: Router) { this.cred  = new Credentials("","",""); }
  //Form Validables 
  registerForm:any =  FormGroup;
  submitted = false;
  cred : Credentials;
  response:any;
  soeid:string="";
  hashed_password : string = "xd";


  //Add user form actions
  get f() { return this.registerForm.controls; }
  onSsubmit() {
    
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    //True if all the fields are filled
    if(this.submitted)
    {
      let soeid = (<HTMLInputElement>document.getElementById('inputEmail')).value;
      let password = (<HTMLInputElement>document.getElementById('inputPassword')).value;


      this.cred = new Credentials(soeid, password, "user");
      console.log("came heree"+soeid+password);
      this.hashed_password = shajs('sha256').update(password).digest('hex')
      console.log("Hashe" +this.hashed_password);
      this.authService.authenticate(soeid).subscribe(
        data => 
        {
          this.cred = data;
          console.log(" cread=" +this.cred.password + "our pass +"+password);
          if (this.hashed_password == this.cred.password)
          {
            this.authService.setIsAuthenticated(true);
            console.log("Authenticated");
            if (this.cred.role == "admin"){
              this.authService.setIsAuthorized(true);
            }
            else
            {
              this.authService.setIsAuthorized(false);
            }
            this.route.navigate(['/home']);
          }
          else{
            this.route.navigate(['/error']);
          }
        });
    }
/*onSubmit2()
{


    let soeid = (<HTMLInputElement>document.getElementById('inputEmail')).value;
    let password = (<HTMLInputElement>document.getElementById('inputPassword')).value;


    this.cred = new Credentials(soeid, password,"");
    console.log("came here es");
    this.authService.authenticate(this.cred).subscribe(data =>{
    this.response = data;
    console.log("OLa");
  });


}*/

  }
  
  

      //login form
      ngOnInit(): void {
        //login form
       //Add User form validations
       this.registerForm = this.formBuilder.group({
        email: ['', [Validators.required]],
        password: ['', [Validators.required]],
        });
      }
    }