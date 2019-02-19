import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorySideNavComponent } from './category-side-nav.component';

describe('CategorySideNavComponent', () => {
  let component: CategorySideNavComponent;
  let fixture: ComponentFixture<CategorySideNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorySideNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorySideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
