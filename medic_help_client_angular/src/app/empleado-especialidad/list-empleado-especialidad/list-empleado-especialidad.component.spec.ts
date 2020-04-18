import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEmpleadoEspecialidadComponent } from './list-empleado-especialidad.component';

describe('AddEmpleadoEspecialidadComponent', () => {
  let component: ListEmpleadoEspecialidadComponent;
  let fixture: ComponentFixture<ListEmpleadoEspecialidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEmpleadoEspecialidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEmpleadoEspecialidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
