import { AuthServiceService } from './../auth-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  router: any;

  constructor(public AuthService : AuthServiceService) { }

  logado() : boolean{
    if (this.AuthService.usuarioAutenticado){
      return true;
    }
    else{
      return false;
    }
  }

  logout(){
    this.AuthService.usuarioAutenticado = false;
    this.AuthService.logout();
  }

  ngOnInit() {
  }
}
