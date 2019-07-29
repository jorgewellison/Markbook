import { Component } from '@angular/core';
import { AuthServiceService } from './auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bookmark';

  mostrarNav : boolean = false;

  constructor(private authService: AuthServiceService){

  }

  ngOnInit(){
    this.authService.mostrarNavEmitter.subscribe(
      mostrar => this.mostrarNav = mostrar
    );
  }
}
