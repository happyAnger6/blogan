import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPostEidtComponent } from './admin-post-eidt.component';

describe('AdminPostEidtComponent', () => {
  let component: AdminPostEidtComponent;
  let fixture: ComponentFixture<AdminPostEidtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPostEidtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPostEidtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
