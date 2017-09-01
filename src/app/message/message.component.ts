import { Component, Input } from '@angular/core';
import { Message } from '../message';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {
  @Input() message: Message;
  isCutted: boolean = true;
  isMenuOpen: boolean = false;
  
  cutText(): void {
    this.isCutted = !this.isCutted; 
  }

  showMenu(): void {
    this.isMenuOpen = true;
  }
}
