import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BloganSourcesComponent } from './blogan-sources.component';

describe('BloganSourcesComponent', () => {
  let component: BloganSourcesComponent;
  let fixture: ComponentFixture<BloganSourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloganSourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BloganSourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
