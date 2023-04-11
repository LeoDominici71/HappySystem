import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GradesFormComponent } from './grades-form/grades-form.component'
import { GradesListaComponent } from './grades-lista/grades-lista.component';
import { GradesDiretorComponent } from './grades-diretor/grades-diretor.component';

const routes: Routes = [
  { path: 'grades-form' , component: GradesFormComponent},
  { path: 'grades-lista' , component: GradesListaComponent},
  { path: 'grades-diretor', component: GradesDiretorComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GradesRoutingModule { }
