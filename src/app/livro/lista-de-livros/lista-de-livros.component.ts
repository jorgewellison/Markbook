import { LivroService } from './../livro.service';
import { Component, OnInit } from '@angular/core';
import { Livro } from '../livro';

@Component({
  selector: 'app-lista-de-livros',
  templateUrl: './lista-de-livros.component.html',
  styleUrls: ['./lista-de-livros.component.css']
})
export class ListaDeLivrosComponent implements OnInit {
  livro: Livro;

  constructor(private service: LivroService) { }

  getLivros(): Livro[] {
    return this.service.getLivros();
  }
  
  ngOnInit() {
  }

}
