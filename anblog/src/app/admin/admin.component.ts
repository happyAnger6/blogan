import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {
  @Input() tabFlag = 0;
  constructor() {
  }

  ngOnInit() {
  }

  onSelectTab(tabFlag) {
    this.tabFlag = tabFlag;
  }

}
