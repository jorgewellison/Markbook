import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

@Injectable({
  providedIn: "root"
})
export class AuthServiceService {

 constructor(private router: Router) {

  }
  fazerLogin(usuario: string, senha: string) : boolean {
    if (usuario === 'usuario@email.com' && senha === '123456') {
      localStorage.setItem('username', 'Usuario');
      this.router.navigate(['dashboard']);
      return true;
    } else {
      return false;
    }
  }

  logout() : any { localStorage.removeItem('username');}
  getUser() : any { return localStorage.getItem('username');}
  logado(): boolean { return this.getUser() !== null;}


}

