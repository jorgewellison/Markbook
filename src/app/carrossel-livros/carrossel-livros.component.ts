import { Component, OnInit } from '@angular/core';
import { Livro } from './livro';
import { CarrosselLivrosService } from './carrossel-livros.service';

@Component({
  selector: 'app-carrossel-livros',
  templateUrl: './carrossel-livros.component.html',
  styleUrls: ['./carrossel-livros.component.css']
})
export class CarrosselLivrosComponent implements OnInit {
  livros: Livro[]; 
  src: string;

  constructor(private carrosselLivros: CarrosselLivrosService) {
    //let servico = new CarrosselLivrosService(); // USANDO INJEÇÃO DE DEPENDÊNCIA
    this.livros = carrosselLivros.getLivros();
    this.src = carrosselLivros.getSrc();
  }

  ngOnInit() {
  }

}
