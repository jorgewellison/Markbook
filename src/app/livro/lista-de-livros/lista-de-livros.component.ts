import { Component, OnInit } from '@angular/core';

import { Livro } from '../livro';
import { LivroService } from './../livro.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-de-livros',
  templateUrl: './lista-de-livros.component.html',
  styleUrls: ['./lista-de-livros.component.css']
})
export class ListaDeLivrosComponent implements OnInit {

  livros: Livro[]; 
  livroSelecionado: Livro;

  constructor(private service: LivroService, 
    private router: Router, 
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.service.list().subscribe(dados => this.livros = dados);
  }

  onRefresh() {
    this.livros = this.service.list();
  }

  onEdit(id) {
    this.router.navigate(['editar-livro', id], { relativeTo: this.route}); 
  }

  onRemove(livro) {
    this.livroSelecionado = livro;
    this.service.delete(livroSelecionado.id).subscribe(sucesso => {
      this.onRefresh();
      alert('Livro deletado com sucesso!');
    });
  }

  listaVazia() {
    return (this.livros.length == 0);
  }

}
