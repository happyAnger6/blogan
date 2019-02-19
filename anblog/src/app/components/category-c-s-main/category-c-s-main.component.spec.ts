import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryCSMainComponent } from './category-c-s-main.component';

describe('CategoryCSMainComponent', () => {
  let component: CategoryCSMainComponent;
  let fixture: ComponentFixture<CategoryCSMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryCSMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryCSMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
