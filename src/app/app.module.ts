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
import { FormularioLivroComponent } from './formulario-livro/formulario-livro.component';
import { UploadFileComponent } from './upload-file/upload-file/upload-file.component';
import { ListaDeLivrosComponent } from './livro/lista-de-livros/lista-de-livros.component';
import { NovoLivroComponent } from './livro/novo-livro/novo-livro.component';
import { MostrarLivroComponent } from './livro/mostrar-livro/mostrar-livro.component';
import { EditarLivroComponent } from './livro/editar-livro/editar-livro.component';
import { AuthGuardService } from './guards/auth.guard';
import { PgLeituraComponent } from './pg-leitura/pg-leitura/pg-leitura.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DashboardComponent,
    FormularioLivroComponent,
    UploadFileComponent,
    NavComponent,
    ListaDeLivrosComponent,
    NovoLivroComponent,
    MostrarLivroComponent,
    EditarLivroComponent,
    PgLeituraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [
    AuthServiceService,
    AuthGuardService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
