import { Component } from '@angular/core';
import { HttpService } from '../services/http.service';

import { Message } from '../models/message';

@Component({
  moduleId: module.id,
  selector: 'app-message-form',
  templateUrl: 'message-form.component.html',
  styleUrls: ['message-form.component.css'],
  providers: [ HttpService, Message ]
})
export class MessageFormComponent {
  
  constructor(private httpService: HttpService, private message: Message ) { 
    this.message.id = 1;
    this.message.host = "hostFirst";
    this.message.code = 2222;
  }
  
  addMessage(message: Message): void {
    this.httpService.addMessage(this.message).subscribe();
    location.reload();
  }
}
