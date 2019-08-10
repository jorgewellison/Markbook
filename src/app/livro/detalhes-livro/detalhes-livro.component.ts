import { LivroService } from './../livro.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalhes-livro',
  templateUrl: './detalhes-livro.component.html',
  styleUrls: ['./detalhes-livro.component.css']
})
export class DetalhesLivroComponent implements OnInit {

  constructor(private livroService: LivroService) { }

  ngOnInit() {
    this.livroService.getLivros();
  }

}
