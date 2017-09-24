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

  constructor(private user: User, private router: Router ) { }

  ngOnInit() {
  }

  addUser() {
    console.log(this.user.name);
    console.log(this.user.secoundName);
    this.router.navigate(['success-registration']);
  }
}
