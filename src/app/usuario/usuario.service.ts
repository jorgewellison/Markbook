import { Injectable } from '@angular/core';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuarios: Usuario[] = [];

  adicionar() {
    
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
