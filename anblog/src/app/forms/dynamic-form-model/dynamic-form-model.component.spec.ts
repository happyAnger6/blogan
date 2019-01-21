import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormModelComponent } from './dynamic-form-model.component';

describe('DynamicFormModelComponent', () => {
  let component: DynamicFormModelComponent;
  let fixture: ComponentFixture<DynamicFormModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicFormModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
