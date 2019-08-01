import { Component, OnInit } from '@angular/core';

import { Livro } from '../livro';
import { LivroService } from './../livro.service';

@Component({
  selector: 'app-lista-de-livros',
  templateUrl: './lista-de-livros.component.html',
  styleUrls: ['./lista-de-livros.component.css']
})
export class ListaDeLivrosComponent implements OnInit {
  livro: Livro;

  constructor(private livroService: LivroService) { }

  getLivros(): Livro[] {
    return this.livroService.getLivros();
  }

  listaVazia(): boolean {
    return this.livroService.listaVazia();
  }

  // editarLivro(livro: Livro) {
  //   this.livroService.adicionar(livro);
  // }

  // deletarLivro(livro: Livro) {
  //   this.livroService.deletar(livro);
  // }

  ngOnInit() {

  }

}
