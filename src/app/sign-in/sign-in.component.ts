import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  moduleId: module.id,
  selector: 'app-sign-in',
  templateUrl: 'sign-in.component.html',
  styleUrls: ['sign-in.component.css'],
  providers: [ AuthenticationService, User ]
})
export class SignInComponent {
  private isWrongLogin: boolean = false;
  private userLogin: string;
  private userPassword: string;
  private user: User;
  private response: string;


  constructor( private authenticationService: AuthenticationService, private router: Router ) { }

  signIn(){
    this.authenticationService.signIn(this.userLogin, this.userPassword).map((data: Response) => {
        this.response = data['_body'];
        if(this.response == '[]') {
          this.userPassword = '';
          this.isWrongLogin = true;
        } else {
          this.router.navigate(['']); 
        }
    }).subscribe();
  }
}