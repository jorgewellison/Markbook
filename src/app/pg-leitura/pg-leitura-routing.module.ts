import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PgLeituraComponent } from './pg-leitura/pg-leitura.component';


const routes: Routes = [
  { path: '/pg-leitura', component: PgLeituraComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PgLeituraRoutingModule { }
