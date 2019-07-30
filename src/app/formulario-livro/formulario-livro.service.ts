import { Injectable } from '@angular/core';

import { LivroComponent } from '../livro/livro.component'

@Injectable({
  providedIn: 'root'
})
export class FormularioLivroService {
  private livro: LivroComponent

  constructor() { }

  get getLivro () {
    return this.livro
  }
}
