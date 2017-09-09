import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

import { Message } from '../message';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.css'],
  providers: [ HttpService ]
})
export class MessageFormComponent implements OnInit {

  message: Message;

  constructor(private httpService: HttpService) { 
    this.message = new Message;
    this.message.id = 1;
    this.message.host = "hostFirst";
    this.message.code = 2222;
  }
  
  ngOnInit() {}

  addMessage(message: Message): void {
    this.httpService.addMessage(this.message).subscribe();
  }
}
