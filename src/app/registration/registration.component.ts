import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [ User ]
})
export class RegistrationComponent implements OnInit {
  private confirmPassword: string;
  private isIdenticalPasswords: boolean = true;
  constructor(private user: User, private router: Router ) { }

  ngOnInit() {
  }

  addUser(confirmPassword: string) {
    console.log(confirmPassword)
    if(this.user.password == confirmPassword){
      console.log(this.user.password);
      console.log(confirmPassword);
      this.isIdenticalPasswords = true;
    } else {
      console.log("false");
      confirmPassword = "";
      this.isIdenticalPasswords = false;
    } 
    if (this.isIdenticalPasswords) {
      this.router.navigate(['success-registration']);
    }
  }

  isPasswordEmpty(): boolean {
    return this.user.password == null;
  }
}
