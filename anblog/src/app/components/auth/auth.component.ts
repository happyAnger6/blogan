import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  tabFlag:number = 0;
  constructor() { }

  ngOnInit() {
  }

  onSelect(flag) {
    this.tabFlag = flag;
  }
}
