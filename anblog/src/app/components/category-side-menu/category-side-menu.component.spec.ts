import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorySideMenuComponent } from './category-side-menu.component';

describe('CategorySideMenuComponent', () => {
  let component: CategorySideMenuComponent;
  let fixture: ComponentFixture<CategorySideMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorySideMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorySideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
