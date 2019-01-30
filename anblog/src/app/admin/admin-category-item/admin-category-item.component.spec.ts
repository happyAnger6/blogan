import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCategoryItemComponent } from './admin-category-item.component';

describe('AdminCategoryItemComponent', () => {
  let component: AdminCategoryItemComponent;
  let fixture: ComponentFixture<AdminCategoryItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCategoryItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCategoryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
