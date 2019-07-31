import { Livro } from './livro';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  ultimoId = 0;

  livros: Livro[] = [];

  constructor() { }

  adicionar(livro: Livro){
    if(!livro.id){
      livro.id = ++this.ultimoId;
    }
    this.livros.push(livro);
  }

  deletar(id: number){
    this.livros = this.livros.filter(todo => todo.id !== id);
  }

  atualizar(novoLivro: Livro): Livro {
    const velhoLivro = this.getById(novoLivro.id);
    if (!velhoLivro){
      return;
    }
    Object.assign(velhoLivro, novoLivro);
    return velhoLivro;
  }

  getLivros(): Livro[]{
    return this.livros;
  }

  getById(id: number): Livro{
    return this.livros.filter(todo => todo.id === id).pop();
  }
}
