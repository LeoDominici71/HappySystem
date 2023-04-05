import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GradesRoutingModule } from './grades-routing.module';
import { GradesFormComponent } from './grades-form/grades-form.component';


@NgModule({
  declarations: [
    GradesFormComponent
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
