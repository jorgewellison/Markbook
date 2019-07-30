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

  constructor(private router: Router, private livroService: LivroService) { }

  ngOnInit() {
  }

  onSubmit(form: any){
    this.router.navigate(['dashboard/livros']);
  }

  novoLivro(nome: string, autor: string, imagem: string) {
    this.livroService.livros.push(new Livro(nome, autor, imagem));
  }

}
