import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmpleadoEspecialidadComponent } from './add-empleado-especialidad.component';

describe('AddEmpleadoEspecialidadComponent', () => {
  let component: AddEmpleadoEspecialidadComponent;
  let fixture: ComponentFixture<AddEmpleadoEspecialidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEmpleadoEspecialidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEmpleadoEspecialidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
