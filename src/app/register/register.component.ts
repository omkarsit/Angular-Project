import { Component, OnInit } from '@angular/core';

class LoginDetails
{
    Username: String;
    Email: String;
    Password: String;
    CPassword: String;
} 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  reg: LoginDetails;
  constructor() { }

  ngOnInit(): void {

    
  }
  save()
  {
    
  }

}
