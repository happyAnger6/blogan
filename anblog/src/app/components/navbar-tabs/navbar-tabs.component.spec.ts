import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarTabsComponent } from './navbar-tabs.component';

describe('NavbarTabsComponent', () => {
  let component: NavbarTabsComponent;
  let fixture: ComponentFixture<NavbarTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
