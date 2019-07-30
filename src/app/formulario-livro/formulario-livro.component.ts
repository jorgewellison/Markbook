import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-livro',
  templateUrl: './formulario-livro.component.html',
  styleUrls: ['./formulario-livro.component.css']
})
export class FormularioLivroComponent implements OnInit {
nome: string;
autor: string;
srcImagem: string;

  constructor() { 
    
  }

criarLivro(nome: string, autor: string, srcImagem: string) {
  this.nome = nome;
  this.autor = autor;
  this.srcImagem = srcImagem;
    
  alert('Livro enviado com sucesso!'); //Fazer alguma validação aqui!
}

  ngOnInit() { }

}
