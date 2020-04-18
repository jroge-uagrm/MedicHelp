import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarInsideComponent } from './navbar-inside.component';

describe('NavbarInsideComponent', () => {
  let component: NavbarInsideComponent;
  let fixture: ComponentFixture<NavbarInsideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarInsideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarInsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
