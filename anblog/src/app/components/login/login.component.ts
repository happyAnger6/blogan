import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.userForm.value);
  }

}
