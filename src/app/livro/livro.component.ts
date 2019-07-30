import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.css']
})
export class LivroComponent implements OnInit {

  private nome: string;
  private autor: string
  private descricao: string;
  private srcImagem: string; //src da imagem
  private quantPaginas: number;

  constructor () {
    this.nome = "As Crônicas de Nárnia"
    this.autor = "C. S. Lewis"
    this.descricao = "Livro volume único"
    this.srcImagem = "https://images.livrariasaraiva.com.br/imagemnet/imagem.aspx/?pro_id=10293250&qld=90&l=430&a=-1"
    this.quantPaginas = 700;
  }

  // constructor (nome: string, descricao: string, srcImagem: string, quantPaginas: number) {
  //   this.nome = nome;
  //   this.descricao = descricao;
  //   this.srcImagem = srcImagem;
  //   this.quantPaginas = quantPaginas;

  // }

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

  get getDescricao(): string {
    return this.descricao;
  }
  set setDescricao(descricao: string) {
    this.descricao = descricao;
  }

  get getQuantPaginas(): number {
    return this.quantPaginas;
  }
  set setQuantPaginas(quantPaginas: number) {
    this.quantPaginas = quantPaginas;
  }
  
  get getSrcImagem(): string {
    return this.srcImagem;
  }
  set setSrcImagem(srcImagem: string) {
    this.srcImagem = srcImagem;
  }

  ngOnInit() {
  }

}
