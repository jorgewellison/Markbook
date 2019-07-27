import { Component, OnInit } from '@angular/core';

import { LivroComponent } from '../livro/livro.component';

@Component({
  selector: 'app-formulario-livro',
  templateUrl: './formulario-livro.component.html',
  styleUrls: ['./formulario-livro.component.css']
})
export class FormularioLivroComponent implements OnInit {
  // private livro: Livro;

  // Injeção de dependência
  constructor(private livro: LivroComponent) {
    
   }

  setLivro(nome: string, autor: string, categoria: string,
    descricao: string, srcImagem: string, quantPaginas: number) {

    this.livro.setNome = nome;
    this.livro.setAutor = autor;
    this.livro.setCategoria = categoria;
    this.livro.setDescricao = descricao;
    this.livro.setSrcImagem = srcImagem;
    this.livro.setQuantPaginas = quantPaginas;
  }

  ngOnInit() {
  }

}
