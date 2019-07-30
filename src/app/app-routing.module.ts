import { EditarLivroComponent } from './livro/editar-livro/editar-livro.component';
import { MostrarLivroComponent } from './livro/mostrar-livro/mostrar-livro.component';
import { NovoLivroComponent } from './livro/novo-livro/novo-livro.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListaDeLivrosComponent } from './livro/lista-de-livros/lista-de-livros.component';
import { AuthGuardService } from './guards/auth.guard';
import { PgLeituraComponent } from './pg-leitura/pg-leitura/pg-leitura.component';


const routes: Routes = [

  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService]},
  { path: 'upload', loadChildren: './upload-file/upload-file.module#UploadFileModule', canActivate: [AuthGuardService]},
  { path: 'dashboard/livros', component: ListaDeLivrosComponent, canActivate: [AuthGuardService]},
  { path: 'dashboard/livros/novo', component: NovoLivroComponent, canActivate: [AuthGuardService]},
  { path: 'dashboard/livro:id/edit', component: EditarLivroComponent, canActivate: [AuthGuardService]},
  { path: 'pg-leitura', component: PgLeituraComponent, canActivate: [AuthGuardService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

