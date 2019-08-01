import { Component, OnInit } from '@angular/core';

import { LivroService } from '../livro.service';
import { Livro } from '../livro';

@Component({
  selector: 'app-editar-livro',
  templateUrl: './editar-livro.component.html',
  styleUrls: ['./editar-livro.component.css']
})
export class EditarLivroComponent implements OnInit {
  livro: Livro;
  
  constructor(private livroService: LivroService) { 

  }
  
  editarLivro(nome: string, autor: string, imagem: string) {
    this.livro.nome = nome;
    this.livro.autor = autor;
    this.livro.imagem = imagem;
    this.livroService.editar(this.livro);
  
  // this.router.navigate(['/books', this.book.id]); // TODO: AJUSTAR ESSA ROTA!
  }

  voltar() {
    // this.bookService.clearMessage();
    // this.router.navigate(['/books']);
    // return false;
  }

  ngOnInit() {

  }

}
