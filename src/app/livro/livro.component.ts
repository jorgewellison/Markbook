import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.css']
})
export class LivroComponent implements OnInit {

  private nome: string;
  private autor: string;
  // private categoria: string;
  // private descricao: string;
  private srcImagem: string; //url da imagem
  // private quantPaginas: number;

  constructor() { 
    
  }

  get getNome(): string {
    return this.nome;
  }
  set setNome(nome: string) {
    this.nome = nome;
  }

  get getAutor(): string {
    return this.autor;
  }
  set setAutor(autor: string) {
    this.autor = autor;
  }

  // get getCategoria() {
  //   return this.categoria;
  // }

  // set setCategoria(categoria: string) {
  //   this.categoria = categoria;
  // }

  // get getDescricao(): string {
  //   return this.descricao;
  // }
  // set setDescricao(descricao: string) {
  //   this.descricao = descricao;
  // }

  // get getQuantPaginas(): number {
  //   return this.quantPaginas;
  // }
  // set setQuantPaginas(quantPaginas: number) {
  //   this.quantPaginas = quantPaginas;
  // }

  get getSrcImagem(): string {
    return this.srcImagem;
  }
  set setSrcImagem(srcImagem: string) {
    this.srcImagem = srcImagem;
  }

  ngOnInit() {
  }

}
