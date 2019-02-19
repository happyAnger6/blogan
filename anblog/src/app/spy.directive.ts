import {Directive, OnDestroy, OnInit} from '@angular/core';

import { MessageService } from './services/message.service';

@Directive({
  selector: '[appSpy]'
})
export class SpyDirective implements OnInit, OnDestroy{

  constructor(
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.logIt(`OnInit.`);
  }

  ngOnDestroy() {
    this.logIt(`onDestory.`);
  }

  private logIt(msg: string) {
    this.messageService.add(`spy  ${msg}`);
  }
}
