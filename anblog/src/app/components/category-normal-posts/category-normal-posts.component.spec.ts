import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryNormalPostsComponent } from './category-normal-posts.component';

describe('CategoryNormalPostsComponent', () => {
  let component: CategoryNormalPostsComponent;
  let fixture: ComponentFixture<CategoryNormalPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryNormalPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryNormalPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
