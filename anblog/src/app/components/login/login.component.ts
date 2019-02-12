import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { User } from '../../models/user';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm = new FormGroup({
    name : new FormControl(''),
    passwd : new FormControl(''),
    remeber: new FormControl(''),
  });
  errmsg: string;
  user: User = new User();
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    let form_value = this.userForm.value;
    this.authService.login({
      'username': form_value.name,
      'password': form_value.passwd,
      'remeber': form_value.remeber
    }).subscribe({
      next:
        r => {
        },
      error:
        err => {
        this.errmsg = err;}
    });
  }

}
