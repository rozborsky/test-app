import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user';
import { RegistrationService } from '../services/registration.service';

@Component({
  moduleId: module.id,
  selector: 'app-registration',
  templateUrl: 'registration.component.html',
  styleUrls: ['registration.component.css'],
  providers: [ RegistrationService, User ]
})
export class RegistrationComponent {
  private confirmPassword: string;
  private isIdenticalPasswords: boolean = true;

  constructor(
    private registrationService: RegistrationService, 
    private user: User, 
    private router: Router ) { }


  addUser(confirmPassword: string): void {
    if (this.user.password == confirmPassword) {
      this.isIdenticalPasswords = true;
      this.registrationService.addUser(this.user);
    } else {
      confirmPassword = "";
      this.isIdenticalPasswords = false;
    } 
    if (this.isIdenticalPasswords) {
      this.registrationService.addUser(this.user).subscribe();
      this.router.navigate(['success-registration']); 
    }
  }


  isPasswordEmpty(): boolean {
    return this.user.password == null;
  }
}