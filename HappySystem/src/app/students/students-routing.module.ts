import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsFormComponent } from './students-form/students-form.component'
import { StudentsListaComponent } from './students-lista/students-lista.component';

const routes: Routes = [
  { path: 'students-form' , component: StudentsFormComponent },
  { path: 'students-form/:matricula' , component: StudentsFormComponent },
  { path: 'students-lista' , component: StudentsListaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
