import { AuthServiceService } from './auth-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CarrosselLivrosComponent } from './carrossel-livros/carrossel-livros.component';
import { CarrosselLivrosService } from './carrossel-livros/carrossel-livros.service';
import { ExibeLivrosComponent } from './exibe-livros/exibe-livros.component';
import { LivroComponent } from './livro/livro.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DashboardComponent,
    CarrosselLivrosComponent,
    ExibeLivrosComponent,
    LivroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [
    AuthServiceService,
    CarrosselLivrosService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
