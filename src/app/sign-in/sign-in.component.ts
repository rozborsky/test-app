import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators, ValidatorFn } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';

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
  private signInForm: FormGroup;


  constructor(
    private authenticationService: AuthenticationService, 
    private router: Router,
    private jsonService: JsonService) {
      this.setValidators();
  }

  private setValidators(): void {
    let login = new FormControl('', Validators.compose([ Validators.required, CustomValidators.rangeLength([1, 20]), Validators.pattern(/^[a-zA-Z0-9]+$/)]));
    let password = new FormControl('', Validators.compose([ Validators.required, CustomValidators.rangeLength([1, 20]), Validators.pattern(/^[a-zA-Z0-9]+$/)]));
      
    this.signInForm = new FormGroup({
      login: login,
      password: password
    });
  }

  private signIn(): void{
    this.authenticationService.signIn(this.signInForm.value['login'], this.signInForm.value['password']).map((data: Response) => {
        this.response = data['_body'];
        if(this.response === '[]') {
          this.signInForm.patchValue({password: ''});
          
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