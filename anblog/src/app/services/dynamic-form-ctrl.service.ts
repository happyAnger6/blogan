import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ColBase } from '../forms/col-base';

@Injectable({
  providedIn: 'root'
})
export class DynamicFormCtrlService {

  constructor() { }

  toFormGroup(cols: ColBase<any>[] ) {
    let group: any = {};

    cols.forEach(col => {
      group[col.key] = col.required ? new FormControl(col.value || '', Validators.required)
        : new FormControl(col.value || '');
    });
    return new FormGroup(group);
  }
}
