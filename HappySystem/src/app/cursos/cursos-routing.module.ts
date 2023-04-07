import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosFormComponent } from './cursos-form/cursos-form.component'
import { CursosListaComponent } from './cursos-lista/cursos-lista.component';
import { CursosProfComponent } from './cursos-prof/cursos-prof.component';

const routes: Routes = [
  { path: 'cursos-form' , component: CursosFormComponent},
  { path: 'cursos-form/:id' , component: CursosFormComponent},
  { path: 'cursos-prof' , component: CursosProfComponent},
  { path: 'cursos-lista' , component: CursosListaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
