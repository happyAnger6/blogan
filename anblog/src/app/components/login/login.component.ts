import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

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
    private authService: AuthService,
    public router: Router
  ) { }

  ngOnInit() {
    this.userForm.patchValue({'remeber':true});
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
            if(this.authService.isLoggedIn) {
                let redirect = this.authService.redirectUrl? this.authService.redirectUrl: '/home';
                this.router.navigate([redirect]);
            }
        },
      error:
        err => {
        this.errmsg = err;}
    });
  }

}
