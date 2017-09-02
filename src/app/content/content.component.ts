import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { Response } from '@angular/http';
import { HttpService } from '../http.service';

import { Message } from '../message';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  providers: [ HttpService ]
})
export class ContentComponent implements OnInit {
  messages: Message[] = [];
  
  constructor(private httpService: HttpService){}
  
  ngOnInit(){
     this.httpService.getMessages().subscribe((data: Response) => this.messages=data.json());
  }
}