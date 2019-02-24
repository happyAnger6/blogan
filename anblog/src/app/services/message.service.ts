import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MessageService {
  messages: string[][] = [];
  msg_level = 5;

  initMsgs() {
    for (let i = 0; i < this.msg_level; i++){
      this.messages[i] = [];
      console.log(this.messages[i].length);
    }
  }

  constructor() {
    this.initMsgs();
  }

  add(message: string) {
    this.error(message);
  }

  debug(message: string) {
    this.messages[0].push(message);
  }

  info(message: string) {
    this.messages[1].push(message);
  }

  warn(message: string) {
    this.messages[2].push(message);
  }

  alert(message: string) {
    this.messages[3].push(message);
  }

  error(message: string) {
    this.messages[4].push(message);
  }


  clear() {
    this.initMsgs();
  }
}
