import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [ UserService, User ]
})
export class RegistrationComponent implements OnInit {
  private confirmPassword: string;
  private isIdenticalPasswords: boolean = true;

  constructor(private userService: UserService, private user: User, private router: Router ) { }

  ngOnInit() {
  }

  addUser(confirmPassword: string) {
    console.log(confirmPassword)
    if(this.user.password == confirmPassword){
      this.isIdenticalPasswords = true;
      this.userService.addUser(this.user);
    } else {
      confirmPassword = "";
      this.isIdenticalPasswords = false;
    } 
    if (this.isIdenticalPasswords) {
      this.userService.addUser(this.user).subscribe();
      this.router.navigate(['success-registration']); 
    }
  }

  isPasswordEmpty(): boolean {
    return this.user.password == null;
  }
}
