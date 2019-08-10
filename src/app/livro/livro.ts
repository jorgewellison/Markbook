export class Livro {
  nome: string;
  autor: string;
  imagem: string;
  public id: number;

  constructor(nome: string, autor: string, imagem: string) {
    this.nome = nome;
    this.autor= autor;
    this.imagem= imagem;
   }
}
