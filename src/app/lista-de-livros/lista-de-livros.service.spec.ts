import { TestBed } from '@angular/core/testing';

import { ListaDeLivrosService } from './lista-de-livros.service';

describe('ListaDeLivrosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListaDeLivrosService = TestBed.get(ListaDeLivrosService);
    expect(service).toBeTruthy();
  });
});
