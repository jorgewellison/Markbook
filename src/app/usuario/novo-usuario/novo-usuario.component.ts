import { Component, OnInit } from '@angular/core';

import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent implements OnInit {
  usuario: Usuario;

  constructor(private usuarioService: UsuarioService) { }

  novoUsuario(nomeUsuario: string, emailUsuario: string, senhaUsuario: string) {
    this.usuario.nome = nomeUsuario;
    this.usuario.email = emailUsuario;
    this.usuario.senha = senhaUsuario;
    this.usuarioService.adicionar(this.usuario);
  }
  ngOnInit() {
  }

}
