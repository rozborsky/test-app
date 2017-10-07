import { Component } from '@angular/core';
import { Router } from '@angular/router';


import { User } from '../models/user';
import { AuthenticationService } from '../services/authentication.service';
import { JsonService } from '../services/json.service';

@Component({
  moduleId: module.id,
  selector: 'app-sign-in',
  templateUrl: 'sign-in.component.html',
  styleUrls: ['sign-in.component.css'],
  providers: [ AuthenticationService, User, JsonService ]
})
export class SignInComponent {
  private isWrongLogin: boolean = false;
  private userLogin: string;
  private userPassword: string;
  private user: User;
  private response: string;


  constructor(
    private authenticationService: AuthenticationService, 
    private router: Router,
    private jsonService: JsonService 
  ) { }


  private signIn(): void{
    this.authenticationService.signIn(this.userLogin, this.userPassword).map((data: Response) => {
        this.response = data['_body'];

        if(this.response === '[]') {
          this.userPassword = '';
          this.isWrongLogin = true;
        } else {
          this.setCookie();
          this.router.navigate(['']); 
        }
    }).subscribe();
  }

  private setCookie(): void {
    let userValues: Array<Array<string>> = this.jsonService.parseJson(this.response);
    for (let values of userValues){
      this.authenticationService.setCookie(values[0], values[1]);
    }
  }
}