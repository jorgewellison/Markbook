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
import { LivroComponent } from './livro/livro.component';
import { FormularioLivroComponent } from './formulario-livro/formulario-livro.component';
import { UploadFileComponent } from './upload-file/upload-file/upload-file.component';
import { LoggedGuard } from './logged.guard';
import { AuthGuardService } from './guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DashboardComponent,
    LivroComponent,
    FormularioLivroComponent,
    UploadFileComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [
    AuthServiceService,
    LoggedGuard,
    AuthGuardService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
