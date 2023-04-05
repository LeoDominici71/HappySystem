import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GradesFormComponent } from './grades-form/grades-form.component'

const routes: Routes = [
  { path: 'grades-form' , component: GradesFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GradesRoutingModule { }
