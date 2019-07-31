import { Injectable } from '@angular/core';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  ultimoId: number = 0;
  usuarios: Usuario[] = [];

  adicionar(usuario: Usuario) {
    if(usuario.id) {

    }
    this.usuarios.push(usuario);
    // TODO: FAZER VALIDAÇÃO COM 'ID'
  }

  atualizar (usuario: Usuario) {
    this.usuarios.push(usuario);
    // TODO: FAZER VALIDAÇÃO COM 'ID'
  }

  // getUsuarios () {
  //   return this.usuarios;
  // }
  // TODO: É FUNCIONAL?

  constructor() { }
}
