import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pipe } from '@angular/core';

import { Livro } from './livro';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  private livrosUrl: string;

  constructor(private http: HttpClient) { 
    this.livrosUrl = 'http://localhost:8080/livros'; //Essa url mesmo?
  }

  list() {
    return this.http.get<Livro[]>(this.livrosUrl);
  }

  loadByID(id) {
    return this.http.get(`${this.livrosUrl}/${id}`)
  }

  create(livro: Livro) {
    return this.http.post<Livro>(this.livrosUrl, livro)
  }

  delete(id: number) {
    return this.http.delete<Livro>(`${this.livrosUrl}/${id}`)
  }

  update(livro: Livro) {
    return this.http.put<Livro>(`${this.livrosUrl}/${livro.id}`, livro)
  }

  //.pipe(take(1));

  //: Observable<Livro>
}
