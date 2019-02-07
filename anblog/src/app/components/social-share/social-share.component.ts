import { Component, OnInit } from '@angular/core';

declare var socialShare: any;

@Component({
  selector: 'app-social-share',
  templateUrl: './social-share.component.html',
  styleUrls: ['./social-share.component.css']
})
export class SocialShareComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    socialShare('.social-share');
  }

}
