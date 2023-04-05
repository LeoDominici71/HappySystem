import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms'; '@angular/forms'

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsFormComponent } from './students-form/students-form.component';
import { StudentsListaComponent } from './students-lista/students-lista.component';


@NgModule({
  declarations: [
    StudentsFormComponent,
    StudentsListaComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    FormsModule
  ], exports : [
    StudentsFormComponent,
    StudentsListaComponent
  ]
})
export class StudentsModule { }
