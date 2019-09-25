import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

import { ListaDeLivrosComponent } from './livro/lista-de-livros/lista-de-livros.component';
import { AuthGuardService } from './guards/auth.guard';
import { LivroFormComponent } from './livro/livro-form/livro-form.component';
import { MinhaBibliotecaComponent } from './minha-biblioteca/minha-biblioteca.component';
import { EditarPerfilComponent } from './usuario/editar-perfil/editar-perfil.component';
import { HomeComponent } from './home/home.component';



const routes: Routes = [

  { path: '', component: HomeComponent},
  { path: 'livros', component: ListaDeLivrosComponent, canActivate: [AuthGuardService]},
  { path: 'novo-livro', component: LivroFormComponent},
  { path: 'editar-livro:id', component: LivroFormComponent, canActivate: [AuthGuardService]},
  { path: 'editar-perfil', component: EditarPerfilComponent, canActivate: [AuthGuardService]},
  { path: 'minha-biblioteca', component: MinhaBibliotecaComponent, canActivate: [AuthGuardService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

