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


  constructor() { }

  ngOnInit(): void {
  }

  loginMethod(username, password){
    if(password == this.correctpw){
      alert("ACCES GRANTED")
    }
    else{
      alert("ACCESS DENIED")
    }

  }

}
