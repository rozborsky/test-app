import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';

import { Message } from '../message';

const MESSAGES: Message[] = [
  { id: 11, host: 'Mr. Nice', code: 55, text: 'message1', created: '1111' },
  { id: 12, host: 'Narco', code: 55, text: 'message2', created: '2222' },
  { id: 13, host: 'Mr. Nice', code: 55, text: `message1 message1 message1 
    message1 message1 message1 message1 message1 message1 message1 message1 
    message1 message1 message1 message1 message1 message1 message1 message1
    message1 message1 message1 message1 message1 message1 message1 message1 
    message1 message1 message1 message1 message1 message1 message1 message1
    message1 message1 message1 message1 message1 message1 message1 message1 
    message1 message1 message1 message1 message1 message1 message1 message1 
    message1 message1 message1 message1 `, created: '1111' },
  { id: 14, host: 'Narco', code: 55, text: 'message2', created: '2222' },
  { id: 15, host: 'Mr. Nice', code: 55, text: 'message1', created: '1111' },
  { id: 16, host: 'Narco', code: 55, text: 'message2', created: '2222' },
  { id: 17, host: 'Mr. Nice', code: 55, text: 'message1', created: '1111' },
  { id: 18, host: 'Narco', code: 55, text: 'message2', created: '2222' },
  { id: 19, host: 'Mr. Nice', code: 55, text: 'message1', created: '1111' },
  { id: 20, host: 'Narco', code: 55, text: 'message2', created: '2222' },
  { id: 21, host: 'Bombasto', code: 55, text: 'message3', created: '3333' }
];

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  massages = MESSAGES;

}





