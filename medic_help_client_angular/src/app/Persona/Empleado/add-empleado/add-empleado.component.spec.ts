import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmpleadoComponent } from './add-empleado.component';

describe('AddEmpleadoComponent', () => {
  let component: AddEmpleadoComponent;
  let fixture: ComponentFixture<AddEmpleadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEmpleadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
