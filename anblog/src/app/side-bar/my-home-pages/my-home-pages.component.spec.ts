import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHomePagesComponent } from './my-home-pages.component';

describe('MyHomePagesComponent', () => {
  let component: MyHomePagesComponent;
  let fixture: ComponentFixture<MyHomePagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyHomePagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyHomePagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
