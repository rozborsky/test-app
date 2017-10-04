import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie';

import { AuthenticationService } from '../services/authentication.service';

@Component({
  moduleId: module.id,
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css'],
  providers: [ AuthenticationService ]
})
export class HeaderComponent{
  private name: string;
  private secound_name: string;
  private logged: boolean;

  constructor(private authenticationService: AuthenticationService) { }

  private isLogged(): boolean {
    if (this.authenticationService.isLogged()) {
      this.name = this.authenticationService.getCookie('name');
      this.secound_name = this.authenticationService.getCookie('secound_name');
      return true;
    }
    return false;
  }

  private logOut(): void {
    this.authenticationService.logOut();
  }
}
