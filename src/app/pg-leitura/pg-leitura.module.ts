import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PgLeituraRoutingModule } from './pg-leitura-routing.module';
import { PgLeituraComponent } from './pg-leitura/pg-leitura.component';


@NgModule({
  declarations: [PgLeituraComponent],
  imports: [
    CommonModule,
    PgLeituraRoutingModule
  ]
})
export class PgLeituraModule { }
