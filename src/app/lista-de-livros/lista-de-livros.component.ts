import { Component, OnInit } from '@angular/core';

import { ListaDeLivrosService } from './lista-de-livros.service';

@Component({
  selector: 'lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css']
})
// quando chamar esse componente pelo seletor ele será instânciado
export class ListaDeLivrosComponent implements OnInit {
  
  constructor (private listaDeLivros: ListaDeLivrosService) { }

  ngOnInit() {
  }

}
