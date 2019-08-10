import { DetalhesLivroComponent } from './livro/detalhes-livro/detalhes-livro.component';
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

  { path: '', component: HomeComponent},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService]},
  { path: 'livros', component: ListaDeLivrosComponent, canActivate: [AuthGuardService]},
  { path: 'dashboard/livros:id', component: DetalhesLivroComponent, canActivate: [AuthGuardService],
    children: [
      { path: '', redirectTo: 'edit', pathMatch: 'full'},
      { path: 'edit', component: EditarLivroComponent, canActivate: [AuthGuardService]},
      { path: 'pg-leitura', component: PgLeituraComponent, canActivate: [AuthGuardService]},
    ]},
  { path: 'editar-perfil', component: EditarPerfilComponent, canActivate: [AuthGuardService]},
  { path: 'novo', component: NovoLivroComponent, canActivate: [AuthGuardService]},
  { path: 'minha-biblioteca', component: MinhaBibliotecaComponent, canActivate: [AuthGuardService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

