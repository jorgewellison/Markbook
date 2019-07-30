import { switchMap } from 'rxjs/operators';
import 'rxjs/add/operator/catch';
import { LivroService } from './../livro.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Livro } from '../livro';
import { resolve } from 'q';
import 'rxjs/Rx';


@Component({
  selector: 'app-mostrar-livro',
  templateUrl: './mostrar-livro.component.html',
  styleUrls: ['./mostrar-livro.component.css']
})
export class MostrarLivroComponent implements OnInit {
  public livro: Livro;

  constructor(private route: ActivatedRoute, private livroService: LivroService) { }

  ngOnInit() {
    this.route.params.switchMap( (params: Params) => this.carregarLivro(+params['id']) )
    .subscribe( (livro: Livro) => this.livro = livro);
  }

  carregarLivro(id: number) : Promise<Livro> {
    return new Promise ( (resolve) => resolve(this.livroService.getById(id)));
  }
}
