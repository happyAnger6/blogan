import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ColBase } from '../col-base';
import { DynamicFormCtrlService } from '../../services/dynamic-form-ctrl.service';

@Component({
  selector: 'app-dynamic-form-model',
  templateUrl: './dynamic-form-model.component.html',
  styleUrls: ['./dynamic-form-model.component.css']
})
export class DynamicFormModelComponent implements OnInit {

  @Input() tableRow: ColBase<any>[] = [];
  form: FormGroup;
  payLoad = '';
  constructor(private dfms: DynamicFormCtrlService) { }

  ngOnInit() {
    this.form = this.dfms.toFormGroup(this.tableRow);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }

}
