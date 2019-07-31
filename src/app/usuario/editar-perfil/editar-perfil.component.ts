import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {
  usuario: Usuario;
  
  constructor(private usuarioService: UsuarioService) { }

  editarPerfil(nome: string, email: string, senha: string) {
    this.usuario.nome = nome;
    this.usuario.email = email;
    this.usuario.senha = senha;
    this.usuarioService.atualizar(this.usuario);
  }

  ngOnInit() {
  }

}
