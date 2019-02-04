import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-post',
  templateUrl: './admin-post.component.html',
  styleUrls: ['./admin-post.component.css']
})
export class AdminPostComponent implements OnInit {
  tabFlag: number = 0;
  constructor() {}

  ngOnInit() {
  }

  onSelectTab(tabFlag) {
    this.tabFlag = tabFlag;
    console.log(this.tabFlag);
  }

}
