import { TestBed } from '@angular/core/testing';

import { CarrosselLivrosService } from './carrossel-livros.service';

describe('CarrosselLivrosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarrosselLivrosService = TestBed.get(CarrosselLivrosService);
    expect(service).toBeTruthy();
  });
});
