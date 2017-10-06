import { Component, OnInit} from '@angular/core';
import { NgFor } from '@angular/common';
import { Response } from '@angular/http';
import { MessageService } from '../services/message.service';

import { Message } from '../models/message';
import { MessageFormComponent } from '../message-form/message-form.component';
import { User } from '../models/user';


@Component({
  moduleId: module.id,
  selector: 'app-content',
  templateUrl: 'content.component.html',
  styleUrls: ['content.component.css'],
  providers: [ MessageService ]
})
export class ContentComponent implements OnInit{
  private messages: Message[]=[];
  private users: User[]=[];
  private people: Map<string, String> = new Map<string, string>();

  constructor(private messageService: MessageService){}
  
  ngOnInit() {
    this.getMessages();
    this.getUsers();
  }
  
  private getMessages(): void {
    this.messageService.getMessages().subscribe((data: Response) => this.messages=data.json());
  }

  private getUsers(): void {
    this.messageService.getUsers().subscribe((data: Response) => this.users=data.json());
  }

  private getName(id: number): string {
    for (let user of this.users) {
      if(user.id === id) {
        return user.name + " " + user.secoundName;
      }
    }
  }
}