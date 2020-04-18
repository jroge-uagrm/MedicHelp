import { TestBed } from '@angular/core/testing';

import { AddPacienteService } from './add-paciente.service';

describe('AddPacienteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddPacienteService = TestBed.get(AddPacienteService);
    expect(service).toBeTruthy();
  });
});
