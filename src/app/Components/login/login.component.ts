import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Credentials } from 'src/app/Models/credentials';
import { AuthService } from 'src/app/Services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, authService: AuthService) { this.cred  = new Credentials("","",""); }
  //Form Validables 
  registerForm:any =  FormGroup;
  submitted = false;
  cred : Credentials;
  authService : AuthService;
  response:any;


  //Add user form actions
  get f() { return this.registerForm.controls; }
  onSubmit() {
    
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
      console.log("came here"+soeid+password);
      this.authService.authenticate(soeid).subscribe(data => console.log(data));
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
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]],
        });
      }
    }