import { LivroService } from './../livro.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Livro } from '../livro';

@Component({
  selector: 'app-novo-livro',
  templateUrl: './novo-livro.component.html',
  styleUrls: ['./novo-livro.component.css']
})
export class NovoLivroComponent implements OnInit {
  livro: Livro = new Livro("","","");

  constructor(private router: Router, private livroService: LivroService) { }

  ngOnInit() {
  }

  novoLivro(nome: string, autor: string, imagem: string) {
    // this.livroService.livros.push(new Livro(nome, autor, imagem));
    this.livro.nome = nome;
    this.livro.autor = autor;
    this.livro.imagem = imagem;
    this.router.navigate(['/livros']);
    this.livroService.adicionar(this.livro);
  }

}
