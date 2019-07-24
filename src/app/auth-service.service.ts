import { Injectable } from "@angular/core";
import { Usuario } from './home/usuario';
import { Router } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

@Injectable({
  providedIn: "root"
})
export class AuthServiceService {

  private usuarioAutenticado: boolean = false;

  constructor(private router: Router){

  }
  fazerLogin(usuario: Usuario) {
    if (usuario.nome === 'usuario@email.com' && usuario.senha === '123456') {
      this.usuarioAutenticado = true;
      sessionStorage.setItem('username', 'Jorge');
      this.router.navigate(['dashboard']);
    } else {
      this.usuarioAutenticado = false;
    }
  }
}
