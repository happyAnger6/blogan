import { TestBed } from '@angular/core/testing';

import { DynamicFormCtrlService } from './dynamic-form-ctrl.service';

describe('DynamicFormCtrlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DynamicFormCtrlService = TestBed.get(DynamicFormCtrlService);
    expect(service).toBeTruthy();
  });
});
