import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators, ValidatorFn } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';

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
  private registrationForm: FormGroup;
  
  constructor(
    private registrationService: RegistrationService, 
    private user: User, 
    private router: Router ) {
      this.setValidators();
    }

  private setValidators(): void {
    let login = new FormControl('', this.setValidatorsParameters(6, 10, /^[a-zA-Z0-9]+$/));
    let name = new FormControl('', this.setValidatorsParameters(2, 20, /^[a-zA-Zа-яА-ЯїЇєЄґҐёЁъ]+$/))
    let secoundName = new FormControl('', this.setValidatorsParameters(2, 20, /^[a-zA-Zа-яА-ЯїЇєЄґҐёЁъ]+$/))
    let password = new FormControl('', this.setValidatorsParameters(6, 10, /^[a-zA-Z0-9]+$/))
    let confirmPassword = new FormControl('', CustomValidators.equalTo(password));
     
    this.registrationForm = new FormGroup({
      login: login,
      name: name,
      secoundName: secoundName,
      password: password,
      confirmPassword: confirmPassword
    });
  }

  setValidatorsParameters(min: number, max: number, pattern: RegExp):ValidatorFn {
    return Validators.compose([ Validators.required, CustomValidators.rangeLength([min, max]), Validators.pattern(pattern)]);
  }
 
  addUser(confirmPassword: string): void {
      this.user = this.initUser(this.registrationForm, this.user);
      this.registrationService.addUser(this.user).subscribe();
      this.router.navigate(['success-registration']);
  }

  private initUser(registrationForm: FormGroup, user: User): User {
    user.login = registrationForm.value['login'];
    user.name = registrationForm.value['name'];
    user.secoundName = registrationForm.value['secoundName'];
    user.password = registrationForm.value['password'];
    return user;
  }
}