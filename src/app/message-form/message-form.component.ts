import { Component } from '@angular/core';
import { MessageService } from '../services/message.service';
import { CookieService } from 'ngx-cookie';
import { AuthenticationService } from '../services/authentication.service';

import { Message } from '../models/message';

@Component({
  moduleId: module.id,
  selector: 'app-message-form',
  templateUrl: 'message-form.component.html',
  styleUrls: ['message-form.component.css'],
  providers: [ MessageService, Message, AuthenticationService ]
})
export class MessageFormComponent {

  constructor(
    private messageService: MessageService, 
    private message: Message, 
    private _cookieService: CookieService,
    private authenticationService: AuthenticationService
  ) { 
    this.message.id = 1;
    this.message.host = "hostFirst";
    this.message.code = 2222;
  }
  
  private addMessage(message: Message): void {
    this.messageService.addMessage(this.message).subscribe();
    location.reload();
  }

  private isLogged(): boolean {
    if (this.authenticationService.isLogged()) {
      return true;
    }
    return false;
  }
}
