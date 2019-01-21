import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormColComponent } from './dynamic-form-col.component';

describe('DynamicFormColComponent', () => {
  let component: DynamicFormColComponent;
  let fixture: ComponentFixture<DynamicFormColComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicFormColComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
