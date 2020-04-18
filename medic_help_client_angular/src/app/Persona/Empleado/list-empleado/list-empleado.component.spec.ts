import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEmpleadoComponent } from './list-empleado.component';

describe('ListEmpleadoComponent', () => {
  let component: ListEmpleadoComponent;
  let fixture: ComponentFixture<ListEmpleadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEmpleadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
