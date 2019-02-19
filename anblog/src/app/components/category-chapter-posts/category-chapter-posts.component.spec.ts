import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryChapterPostsComponent } from './category-chapter-posts.component';

describe('CategoryChapterPostsComponent', () => {
  let component: CategoryChapterPostsComponent;
  let fixture: ComponentFixture<CategoryChapterPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryChapterPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryChapterPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
