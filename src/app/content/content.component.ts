import { Component, OnInit} from '@angular/core';
import { NgFor } from '@angular/common';
import { Response } from '@angular/http';
import { MessageService } from '../services/message.service';

import { Message } from '../models/message';
import { MessageFormComponent } from '../message-form/message-form.component';


@Component({
  moduleId: module.id,
  selector: 'app-content',
  templateUrl: 'content.component.html',
  styleUrls: ['content.component.css'],
  providers: [ MessageService ]
})
export class ContentComponent implements OnInit{
  private messages: Message[]=[];

  constructor(private messageService: MessageService){}
  
  ngOnInit() {
    this.getMessages();
  }
  
  private getMessages() {
    this.messageService.getMessages().subscribe((data: Response) => this.messages=data.json());
  }
}