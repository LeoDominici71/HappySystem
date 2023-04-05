import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiretorFormComponent } from './diretor-form/diretor-form.component'
import { DiretorListaComponent } from './diretor-lista/diretor-lista.component';

const routes: Routes = [
  { path: 'diretor-form' , component: DiretorFormComponent },
  { path: 'diretor-form/:matricula' , component: DiretorFormComponent },
  { path: 'diretor-lista' , component: DiretorListaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiretorRoutingModule { }
