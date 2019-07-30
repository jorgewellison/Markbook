import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mostrar-livro',
  templateUrl: './mostrar-livro.component.html',
  styleUrls: ['./mostrar-livro.component.css']
})
export class MostrarLivroComponent implements OnInit {

  constructor(private Route: ActivatedRoute) { }

  ngOnInit() {
  }

}
