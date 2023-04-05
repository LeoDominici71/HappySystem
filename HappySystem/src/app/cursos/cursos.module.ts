import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosFormComponent } from './cursos-form/cursos-form.component';
import { CursosListaComponent } from './cursos-lista/cursos-lista.component';


@NgModule({
  declarations: [
    CursosFormComponent,
    CursosListaComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    FormsModule
  ], exports: [
    CursosFormComponent
  ]
})
export class CursosModule { }