import { Injectable } from "@angular/core";
class LoginDetails
{
    Username: String;
    Email: String;
    Password: String;
    CPassword: String;
} 

@Injectable({
    providedIn: 'root',
  })

  export class UserService {

    
    constructor() { }

getData()
{
   

}
setData()
{
    
localStorage.setItem('ProductName', 'Mobile');

}
}

