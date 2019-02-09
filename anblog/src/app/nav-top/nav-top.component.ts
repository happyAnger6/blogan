import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-nav-top',
  templateUrl: './nav-top.component.html',
  styleUrls: ['./nav-top.component.css']
})
export class NavTopComponent implements OnInit {
  searchForm = new FormGroup({
    searchTitle: new FormControl(''),
    }
  );
  constructor() { }

  ngOnInit() {
  }

}
