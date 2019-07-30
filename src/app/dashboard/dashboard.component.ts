import { AuthServiceService } from './../auth-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public AuthService: AuthServiceService, private router: Router) { }

  logout(){
    this.AuthService.usuarioAutenticado = false;
    this.AuthService.logout();
    this.AuthService.ocultarNavEmitter.emit(true);
    this.router.navigate(['']);
  }

  ngOnInit() {
  }

}
