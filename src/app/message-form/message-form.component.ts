import { Component } from '@angular/core';
import { MessageService } from '../services/message.service';

import { Message } from '../models/message';

@Component({
  moduleId: module.id,
  selector: 'app-message-form',
  templateUrl: 'message-form.component.html',
  styleUrls: ['message-form.component.css'],
  providers: [ MessageService, Message ]
})
export class MessageFormComponent {
  
  constructor(private messageService: MessageService, private message: Message) { 
    this.message.id = 1;
    this.message.host = "hostFirst";
    this.message.code = 2222;
  }
  
  addMessage(message: Message): void {
    this.messageService.addMessage(this.message).subscribe();
    location.reload();
  }
}
