import { AuthServiceService } from './../auth-service.service';
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {

  message: string;
  constructor(public authService: AuthServiceService) {
    this.message = '';
  }
  login(username: string, password: string): boolean {
    this.message = '';
    if (!this.authService.login(username, password)) {
      this.message = 'Incorrect credentials.';
      setTimeout(function() {
        this.message = '';
      }.bind(this), 2500);
    }
    return false;
  }
  logout(): boolean { this.authService.logout(); return false; }


  ngOnInit() {

  }
}
