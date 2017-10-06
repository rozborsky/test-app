import { Component, Input } from '@angular/core';
import { Message } from '../models/message';

@Component({
  moduleId: module.id,
  selector: 'app-message',
  templateUrl: 'message.component.html',
  styleUrls: ['message.component.css']
})
export class MessageComponent {
  @Input() message: Message;
  @Input() name: string;
  private isCutted: boolean = true;
  private isMenuOpen: boolean = false;
  private text_of_message: string;


  ngOnInit() {
    this.text_of_message = this.getMesage();
  }

  private cutText(): void {
    this.isCutted = !this.isCutted; 
  }

  private showMenu(): void {
    this.isMenuOpen = true;
  }

  private getMesage() {
    return this.message.message;
  }
}
