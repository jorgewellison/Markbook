import { NavComponent } from './nav/nav.component';
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
import { ListaDeLivrosComponent } from './livro/lista-de-livros/lista-de-livros.component';
import { AuthGuardService } from './guards/auth.guard';
import { PgLeituraComponent } from './pg-leitura/pg-leitura/pg-leitura.component';
import { TimelineComponent } from './timeline/timeline.component';
import { EditarPerfilComponent } from './usuario/editar-perfil/editar-perfil.component';
import { MinhaBibliotecaComponent } from './minha-biblioteca/minha-biblioteca.component';
import { NovoUsuarioComponent } from './usuario/novo-usuario/novo-usuario.component';
import { HttpClientModule } from '@angular/common/http';
import { LivroFormComponent } from './livro/livro-form/livro-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DashboardComponent,
    NavComponent,
    ListaDeLivrosComponent,
    PgLeituraComponent,
    TimelineComponent,
    EditarPerfilComponent,
    MinhaBibliotecaComponent,
    NovoUsuarioComponent,
    LivroFormComponent,
    ReactiveFormsModule,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    AuthServiceService,
    AuthGuardService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
