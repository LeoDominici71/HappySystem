import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GradesRoutingModule } from './grades-routing.module';
import { GradesFormComponent } from './grades-form/grades-form.component';
import { GradesListaComponent } from './grades-lista/grades-lista.component';


@NgModule({
  declarations: [
    GradesFormComponent,
    GradesListaComponent
  ],
  imports: [
    CommonModule,
    GradesRoutingModule,
    FormsModule
  ], exports: [
    GradesFormComponent
  ]
})
export class GradesModule { }
