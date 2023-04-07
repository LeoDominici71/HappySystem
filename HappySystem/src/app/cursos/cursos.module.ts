import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosFormComponent } from './cursos-form/cursos-form.component';
import { CursosListaComponent } from './cursos-lista/cursos-lista.component';
import { CursosProfComponent } from './cursos-prof/cursos-prof.component';


@NgModule({
  declarations: [
    CursosFormComponent,
    CursosListaComponent,
    CursosProfComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    FormsModule,
    RouterModule
  ], exports: [
    CursosFormComponent
  ]
})
export class CursosModule { }
