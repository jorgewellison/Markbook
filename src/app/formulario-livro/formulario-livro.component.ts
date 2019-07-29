import { Component, OnInit } from '@angular/core';
import { FormularioLivroService } from './formulario-livro.service';

@Component({
  selector: 'app-formulario-livro',
  templateUrl: './formulario-livro.component.html',
  styleUrls: ['./formulario-livro.component.css']
})
export class FormularioLivroComponent implements OnInit {

  constructor(private form: FormularioLivroService) { 
    
  }
  setLivro(nome: string, autor: string, categoria: string, 
    descricao: string, urlImagem: string, quantPaginas: number) {
    
    this.form.getLivro.setNome = nome;
    
  }

  // setLivro(nome: string, autor: string, categoria: string,
  //   descricao: string, srcImagem: string, quantPaginas: number) {

  //   this.livro.setNome = nome;
  //   this.livro.setAutor = autor;
  //   this.livro.setCategoria = categoria;
  //   this.livro.setDescricao = descricao;
  //   this.livro.setSrcImagem = srcImagem;
  //   this.livro.setQuantPaginas = quantPaginas;
  // }

  ngOnInit() { }

}
