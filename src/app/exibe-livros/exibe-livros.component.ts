import { Component, OnInit } from '@angular/core';
import { Livro } from './livro';

@Component({
  selector: 'app-exibe-livros',
  templateUrl: './exibe-livros.component.html',
  styleUrls: ['./exibe-livros.component.css']
})
export class ExibeLivrosComponent implements OnInit {
  livro: Livro[];

  constructor() {
     
   }

  ngOnInit() {
  }

}
