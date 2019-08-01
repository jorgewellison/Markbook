import { Injectable } from '@angular/core';

import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class LivroService {
  ultimoId: number = 0;
  livros: Livro[] = [];

  constructor() { }

  // adicionar() já fuciona como o atualizar
  adicionar(livro: Livro) {
    if (!livro.id) { // 0 é false, negar 0 é true. Se for zero no id...
      livro.id = ++this.ultimoId;
    }
    this.livros.push(livro);
    // console.log(this.ultimoId); // verificar se está passando id
  }

  editar(livro: Livro) {
    for (let l of this.livros) {
      if (l.id == livro.id) {
        this.livros.splice(this.livros.indexOf(l), 0, livro);
      }
    }
  }

  deletar(livro: Livro) {
    for (let l of this.livros) {
      if (l.id == livro.id) {
        // delete this.livros[this.livros.indexOf(l)];
        this.livros.splice(this.livros.indexOf(l), 1);
      }
    }
  }

  // deletar(id: number){
  //   this.livros = this.livros.filter(todo => todo.id !== id);
  // }

  // atualizar(novoLivro: Livro): Livro {
  //   const velhoLivro = this.getById(novoLivro.id);
  //   if (!velhoLivro){
  //     return;
  //   }
  //   Object.assign(velhoLivro, novoLivro);
  //   return velhoLivro;
  // }

  getLivros(): Livro[] {
    return this.livros;
  }

  listaVazia(): boolean {
    if (this.livros.length == 0) {
      return true;
    }
  }

  // getById(id: number): Livro{
  //   return this.livros.filter(todo => todo.id === id).pop();
  // }
}
