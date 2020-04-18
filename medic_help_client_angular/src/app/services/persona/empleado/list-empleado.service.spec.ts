import { TestBed } from '@angular/core/testing';

import { ListEmpleadoService } from './list-empleado.service';

describe('ListEmpleadoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListEmpleadoService = TestBed.get(ListEmpleadoService);
    expect(service).toBeTruthy();
  });
});
