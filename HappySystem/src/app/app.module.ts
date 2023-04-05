import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component'
import { DiretorModule } from './diretor/diretor.module';
import { StudentsModule } from './students/students.module';
import { CursosModule } from './cursos/cursos.module';
import { GradesModule } from './grades/grades.module';
import { DiretorService } from './diretor.service'
import { StudentsServiceService } from './students-service.service';
import { CursoService } from './curso.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    DiretorModule,
    StudentsModule,
    CursosModule,
    GradesModule
  ],
  providers: [
    DiretorService,
    StudentsServiceService,
    CursoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
