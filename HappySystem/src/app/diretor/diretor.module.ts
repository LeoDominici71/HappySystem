import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { DiretorRoutingModule } from './diretor-routing.module';
import { DiretorFormComponent } from './diretor-form/diretor-form.component';
import { DiretorListaComponent } from './diretor-lista/diretor-lista.component';


@NgModule({
  declarations: [
    DiretorFormComponent,
    DiretorListaComponent
  ],
  imports: [
    CommonModule,
    DiretorRoutingModule,
    FormsModule
  ], exports: [
    DiretorFormComponent,
    DiretorListaComponent
  ]
})
export class DiretorModule { }
