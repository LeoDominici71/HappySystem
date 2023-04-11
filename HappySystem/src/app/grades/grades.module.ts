import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GradesRoutingModule } from './grades-routing.module';
import { GradesFormComponent } from './grades-form/grades-form.component';
import { GradesListaComponent } from './grades-lista/grades-lista.component';
import { GradesDiretorComponent } from './grades-diretor/grades-diretor.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    GradesFormComponent,
    GradesListaComponent,
    GradesDiretorComponent
  ],
  imports: [
    CommonModule,
    GradesRoutingModule,
    FormsModule,
    RouterModule
  ], exports: [
    GradesFormComponent,
    GradesListaComponent,
    GradesDiretorComponent
    
  ]
})
export class GradesModule { }
