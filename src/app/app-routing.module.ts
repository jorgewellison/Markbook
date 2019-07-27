import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'home', component: HomeComponent },
  { path:'upload', loadChildren: './upload-file/upload-file.module#UploadFileModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

