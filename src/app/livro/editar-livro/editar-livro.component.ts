import { Component, OnInit } from '@angular/core';

import { LivroService } from '../livro.service';

@Component({
  selector: 'app-editar-livro',
  templateUrl: './editar-livro.component.html',
  styleUrls: ['./editar-livro.component.css']
})
export class EditarLivroComponent implements OnInit {

  constructor(private editarLivro: LivroService) { }

  ngOnInit() {
  }

}
