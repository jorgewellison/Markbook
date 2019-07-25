import { Component, OnInit } from '@angular/core';

import { CarrosselLivrosService } from './carrossel-livros.service';
import { LivroComponent } from '../livro/livro.component';

@Component({
  selector: 'app-carrossel-livros',
  templateUrl: './carrossel-livros.component.html',
  styleUrls: ['./carrossel-livros.component.css']
})
export class CarrosselLivrosComponent implements OnInit {

  constructor(private carrosselLivros: CarrosselLivrosService) {
    // private livros: LivroComponent[]
  }

  ngOnInit() {
  }

}
