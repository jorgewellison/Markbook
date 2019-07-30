import { EditarLivroComponent } from './livro/editar-livro/editar-livro.component';
import { MostrarLivroComponent } from './livro/mostrar-livro/mostrar-livro.component';
import { NovoLivroComponent } from './livro/novo-livro/novo-livro.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListaDeLivrosComponent } from './livro/lista-de-livros/lista-de-livros.component';
import { AuthGuardService } from './guards/auth.guard';


const routes: Routes = [

  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService]},
  { path: 'upload', loadChildren: './upload-file/upload-file.module#UploadFileModule'},
  { path: 'dashboard/livros', component: ListaDeLivrosComponent},
  { path: 'dashboard/livros/novo', component: NovoLivroComponent},
  { path: 'dashboard/livro:id', component: MostrarLivroComponent},
  { path: 'dashboard/livro:id/edit', component: EditarLivroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

