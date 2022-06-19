export class Credentials {
    soeid:string;
    password:string;
    
    role:string; 
    

    constructor(soeid:string, password:string, role:string)
    {
                this.soeid = soeid;
                this.password = password;
                
                this.role = role;
               
            }
}
