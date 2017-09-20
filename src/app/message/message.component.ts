import { Component, Input } from '@angular/core';
import { Message } from '../message';

@Component({
  moduleId: module.id,
  selector: 'app-message',
  templateUrl: 'message.component.html',
  styleUrls: ['message.component.css']
})
export class MessageComponent {
  
  @Input() message: Message;
  isCutted: boolean = true;
  isMenuOpen: boolean = false;
  text_of_message: string;


  ngOnInit() {
    this.text_of_message = this.getMesage();
  }

  cutText(): void {
    this.isCutted = !this.isCutted; 
  }

  showMenu(): void {
    this.isMenuOpen = true;
  }

  getMesage() {
    return this.message.message;
  }
}
