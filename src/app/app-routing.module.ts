import { MinhaBibliotecaComponent } from './minha-biblioteca/minha-biblioteca.component';
import { EditarPerfilComponent } from './usuario/editar-perfil/editar-perfil.component';
import { EditarLivroComponent } from './livro/editar-livro/editar-livro.component';
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
  { path: 'dashboard/editar-perfil', component: EditarPerfilComponent, canActivate: [AuthGuardService]},
  { path: 'dashboard/minha-biblioteca', component: MinhaBibliotecaComponent, canActivate: [AuthGuardService]},
  { path: 'pg-leitura', component: PgLeituraComponent, canActivate: [AuthGuardService]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

