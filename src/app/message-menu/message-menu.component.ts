import { Component, ElementRef, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Message } from '../models/message';
import { MessageService } from '../services/message.service';

@Component({
  moduleId: module.id,
  selector: 'app-message-menu',
  templateUrl: 'message-menu.component.html',
  styleUrls: ['message-menu.component.css'],
  host: {
    '(document:click)': 'onClick($event)',
  }
})
export class MessageMenuComponent {
  @Input() message: Message;
  private isMenuOpened: boolean = false;

  constructor(
    private _eref: ElementRef, 
    private messageService: MessageService,
    private router: Router) { }

  private onClick(event): void {
    if (!this._eref.nativeElement.contains(event.target)) {
        this.hideMenu();
    }
  }

  private showMenu(): void {
    this.isMenuOpened = true;
  }

  private hideMenu(): void {
    this.isMenuOpened = false;
  }

  private updateMessage(message: Message): void {
    this.messageService.updateMessage(message).subscribe(
      (error: any) => this.errorHandle());
    location.reload();
  }

  private deleteMessage(): void {
    this.messageService.deleteMessage(this.message.id + "").subscribe(
      (error: any) => this.errorHandle());
    location.reload();
  }

  private errorHandle() {
    this.router.navigate(['error']);
  }
}
