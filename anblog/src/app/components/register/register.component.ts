import { Component, OnInit } from '@angular/core';

import {FormGroup, FormControl, Validators} from '@angular/forms';

import { User } from '../../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register_form: FormGroup;
  user: User = new User();
  passwd_a: string = '';
  constructor() { }

  ngOnInit() {
    this.register_form = new FormGroup({
      'name': new FormControl(this.user.realname,[
        Validators.required,
        Validators.minLength(4)
      ]),
      'passwd': new FormControl(this.user.password,[
        Validators.required,
        Validators.minLength(6)
      ]),
      'passwd_again': new FormControl(this.passwd_a,[
        Validators.required,
        Validators.minLength(6)
      ])
      });
  }

  get name() { return this.register_form.get('name'); }
  get passwd() { return this.register_form.get('passwd'); }
  get passwd_again() { return this.register_form.get('passwd_again'); }

  onSubmit() {
    console.log(this.name);
  }
}
