import { Injectable, Input } from '@angular/core';

import { FormularioLivroComponent } from '../formulario-livro/formulario-livro.component';

@Injectable({
  providedIn: 'root'
})
export class ListaDeLivrosService {

  private livros: FormularioLivroComponent[];
  
  constructor() {
    
  }

  set adicionarLivros(livro: FormularioLivroComponent) {
    this.livros.push(livro);
  }
  
  // cliente vai passar o livro pra cá pelo form.. 
}
