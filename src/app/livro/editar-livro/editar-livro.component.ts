import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { LivroService } from '../livro.service';
import { Livro } from '../livro';

@Component({
  selector: 'app-editar-livro',
  templateUrl: './editar-livro.component.html',
  styleUrls: ['./editar-livro.component.css']
})
export class EditarLivroComponent implements OnInit {
  @Input() livro: Livro;
  
  constructor(private livroService: LivroService, private router: Router) { 

  }
  
  editarLivro(nome: string, autor: string, imagem: string) {
    this.livro.nome = nome;
    this.livro.autor = autor;
    this.livro.imagem = imagem;
    this.livroService.editar(this.livro);
  
    this.router.navigate(['/livros', this.livro.id]); // TODO: AJUSTAR ESSA ROTA!
  }

  voltar() {
    // this.bookService.clearMessage();
    // this.router.navigate(['/books']);
    // return false;
  }

  ngOnInit() {

  }

}
