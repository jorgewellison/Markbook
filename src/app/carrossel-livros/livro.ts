export class Livro {
  private nome: string;
  private descricao: string;
  // private srcImagem: string; //src da imagem
  private quantPaginas: number;

  constructor (nome: string, descricao: string, srcImagem: string, quantPaginas: number) {
    this.nome = nome;
    this.descricao = descricao;
    // this.srcImagem = srcImagem;
    this.quantPaginas = quantPaginas;

  }

  get getNome(): string {
    return this.nome;
  }
  set setNome(nome: string) {
    this.nome = nome;
  }

  get getDescricao(): string {
    return this.descricao;
  }
  set setDescricao(descricao: string) {
    this.descricao = descricao;
  }

  get getQuantPaginas(): number {
    return this.quantPaginas;
  }
  set setQuantPaginas(quantPaginas: number) {
    this.quantPaginas = quantPaginas;
  }
  
  // get getSrcImagem(): string {
  //   return this.srcImagem;
  // }
  // set setSrcImagem(srcImagem: string) {
  //   this.srcImagem = srcImagem;
  // }
}