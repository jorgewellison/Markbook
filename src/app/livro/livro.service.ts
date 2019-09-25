import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    return this.http.get<Livro[]>(this.livrosUrl).pipe(take(1));
  }

  loadByID(id) {
    return this.http.get(`${this.livrosUrl}/${id}`).pipe(take(1));
  }

  create(livro: Livro): Observable<Livro> {
    return this.http.post<Livro>(this.livrosUrl, livro).pipe(take(1));
  }

  delete(id: number): Observable<{}> {
    return this.http.delete<Livro>(`${this.livrosUrl}/${id}`).pipe(take(1));
  }

  update(livro: Livro): Observable<Livro> {
    return this.http.put<Livro>(`${this.livrosUrl}/${livro.id}`, livro).pipe(take(1));
  }

  //.pipe(take(1));
}
