import { Component, OnInit } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username;
  public password;
  public correctpw = "123";
  public correctuser = "Morgan Freeman"

  //There's a bug in the validation xD, if you type just the user correct it takes it as good credentials, regardless of the password being wrong
  //but if the username is wrong, it takes it as incorrect


  constructor() { }

  ngOnInit(): void {
  }

  loginMethod(username, password){
    if(password == this.correctpw, username == this.correctuser){
      alert("ACCES GRANTED WELCOME")
    }
    else{
      alert("ACCESS DENIED: wrong password or user")
    }

  }

}
