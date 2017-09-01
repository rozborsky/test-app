import { Component, ElementRef, Input } from '@angular/core';
import { NgForm} from '@angular/forms';

import { Message } from '../message';

@Component({
  selector: 'app-message-menu',
  templateUrl: './message-menu.component.html',
  styleUrls: ['./message-menu.component.css'],
  host: {
    '(document:click)': 'onClick($event)',
  }
})
export class MessageMenuComponent {
  @Input() message: Message;
  isMenuOpened: boolean = false;

  constructor(private _eref: ElementRef) { }

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

  updateMessage() {

  }

  deleteMessage() {
    console.log("delete");
  }
}
