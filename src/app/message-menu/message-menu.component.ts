import { Component, ElementRef, Input } from '@angular/core';
import { NgForm} from '@angular/forms';

import { Message } from '../message';
import { HttpService } from '../http.service';

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
  isMenuOpened: boolean = false;

  constructor(
    private _eref: ElementRef, 
    private httpService: HttpService) { }

  onClick(event) {
    if (!this._eref.nativeElement.contains(event.target)) {
        this.hideMenu();
    }
  }

  showMenu() {
    this.isMenuOpened = true;
  }

  hideMenu() {
    this.isMenuOpened = false;
  }

  updateMessage(message: Message) {
    this.httpService.updateMessage(message).subscribe();
    location.reload();
  }

  deleteMessage(message: Message) {
    this.httpService.deleteMessage(message.id + "").subscribe();
    location.reload();
  }
}
