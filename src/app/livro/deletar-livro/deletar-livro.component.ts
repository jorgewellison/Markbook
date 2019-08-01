import { Component, OnInit, Input } from '@angular/core';
import { Livro } from '../livro';
import { LivroService } from '../livro.service';

@Component({
  selector: 'app-deletar-livro',
  templateUrl: './deletar-livro.component.html',
  styleUrls: ['./deletar-livro.component.css']
})
export class DeletarLivroComponent implements OnInit {
  @Input() livro: Livro;

  constructor(private livroService: LivroService) { }

  deletarLivro(livro: Livro) {
    this.livroService.deletar(livro);
  }

  ngOnInit() {
  }

}
