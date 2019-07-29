import { TestBed } from '@angular/core/testing';

import { FormularioLivroService } from './formulario-livro.service';

describe('FormularioLivroService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormularioLivroService = TestBed.get(FormularioLivroService);
    expect(service).toBeTruthy();
  });
});
