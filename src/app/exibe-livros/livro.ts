export class Livro {
  nome: string;
  descricao: string;
  quantPaginas: number;

  constructor (nome: string, descricao: string, quantPaginas: number) {
    this.nome = nome;
    this.descricao = descricao;
    this.quantPaginas = quantPaginas;

  }
}