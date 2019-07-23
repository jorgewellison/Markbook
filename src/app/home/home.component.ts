import { AuthServiceService } from "./../auth-service.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Usuario } from "./usuario";

@Component({
  selector: "app-home",
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private usuario: Usuario = new Usuario();

  constructor(public authService: AuthServiceService) {
  }

  ngOnInit() {}

  fazerLogin() {
    this.authService.fazerLogin(this.usuario);
  }
}
