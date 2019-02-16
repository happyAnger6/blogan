import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarMainComponent } from './side-bar-main.component';

describe('SideBarMainComponent', () => {
  let component: SideBarMainComponent;
  let fixture: ComponentFixture<SideBarMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideBarMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
