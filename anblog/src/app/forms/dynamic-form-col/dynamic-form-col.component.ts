import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ColBase } from '../col-base';

@Component({
  selector: 'app-dynamic-form-col',
  templateUrl: './dynamic-form-col.component.html',
  styleUrls: ['./dynamic-form-col.component.css']
})
export class DynamicFormColComponent implements OnInit {
  @Input() col: ColBase<any>;
  @Input() form: FormGroup;
  constructor() { }

  ngOnInit() {
  }

  get isValid() {
    return this.form.controls[this.col.key].valid;
  }

}
