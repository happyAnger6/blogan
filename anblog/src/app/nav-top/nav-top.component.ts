import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { AuthService } from '../services/auth.service';
import { User } from '../models/user';

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
  curUser: User;
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.currentUser
      .subscribe(r=>{
        this.curUser = r;
      })
  }

  onLogout() {
    this.authService.logout().subscribe(
      r => { console.log('logout:', r); }
    );
  }
}
