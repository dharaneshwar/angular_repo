export class Employee {
    soeid:string;
    name:string;
    age:number;
    email:string; 
    phone_number:string;

    constructor(soeid:string, name:string, age:number, email:string, phone_number:string)
    {
                this.soeid = soeid;
                this.name = name;
                this.age = age;
                this.phone_number = phone_number;
                this.email = email;
            }
}
