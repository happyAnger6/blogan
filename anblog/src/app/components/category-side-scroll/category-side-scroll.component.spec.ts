import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorySideScrollComponent } from './category-side-scroll.component';

describe('CategorySideScrollComponent', () => {
  let component: CategorySideScrollComponent;
  let fixture: ComponentFixture<CategorySideScrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorySideScrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorySideScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
