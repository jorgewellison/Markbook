import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class CarrosselLivrosService {
  livros: Livro[];

  constructor() {
    let l: Livro = new Livro("nome","descricao","src",1);
    this.livros.push(l);
  }
   
  getLivros(): any {
    return this.livros
  }

  getSrc(): string {
    return "https://images.livrariasaraiva.com.br/imagemnet/imagem.aspx/?pro_id=10293250&qld=90&l=430&a=-1";
  }

}
